/* eslint no-console: 0 */
const { spawn } = require("child_process");

class ServerStartPlugin {
  static onStdOut(data) {
    const time = new Date().toTimeString();
    process.stdout.write(time.replace(/.*(\d{2}:\d{2}:\d{2}).*/, "[$1] "));
    process.stdout.write(data);
  }

  constructor(serverEntry, options = {}) {
    this.child = null;
    this.serverEntry = serverEntry;
    this.options = {
      restartDelay: options.restartDelay || 100,
      killTimeout: options.killTimeout || 5000,
      nodeArgs: [...(options.nodeArgs || []), serverEntry],
      env: options.env || {},
      ...options,
    };
  }

  apply(compiler) {
    compiler.hooks.done.tapAsync("ServerStartPlugin", (stats, callback) => {
      // Check for compilation errors
      if (stats && stats.hasErrors()) {
        console.log("[server]: Skipping restart due to compilation errors");
        callback();
        return;
      }

      this.restartServer(callback);
    });

    // Graceful shutdown on process exit
    process.on("SIGINT", () => this.cleanup());
    process.on("SIGTERM", () => this.cleanup());
    process.on("exit", () => this.cleanup());
  }

  restartServer(callback) {
    if (this.child) {
      console.log("[server]: Stopping existing server...");
      this.killChild(() => {
        this.startServer(callback);
      });
    } else {
      this.startServer(callback);
    }
  }

  killChild(callback) {
    if (!this.child) {
      callback();
      return;
    }

    const child = this.child;
    this.child = null;

    // Try graceful shutdown first
    child.kill("SIGTERM");

    // Force kill if it doesn't respond
    const killTimer = setTimeout(() => {
      if (!child.killed) {
        console.log("[server]: Force killing server process");
        child.kill("SIGKILL");
      }
    }, this.options.killTimeout);

    child.on("exit", () => {
      clearTimeout(killTimer);
      // Small delay to ensure port is released
      setTimeout(callback, this.options.restartDelay);
    });
  }

  startServer(callback) {
    const { nodeArgs } = this.options;

    this.child = spawn("node", nodeArgs, {
      env: {
        ...process.env,
        ...this.options.env,
      },
      stdio: ["inherit", "pipe", "pipe"],
    });

    console.log(`[server]: Starting server with PID ${this.child.pid}`);

    this.child.stdout.on("data", ServerStartPlugin.onStdOut);
    this.child.stderr.on("data", (data) => {
      process.stderr.write(`[server error]: ${data}`);
    });

    this.child.on("error", (err) => {
      console.error("[server]: Failed to start server:", err.message);
    });

    this.child.on("exit", (code, signal) => {
      if (code !== null && code !== 0) {
        console.log(`[server]: Server exited with code ${code}`);
      } else if (signal) {
        console.log(`[server]: Server killed with signal ${signal}`);
      }
      this.child = null;
    });

    callback();
  }

  cleanup() {
    if (this.child) {
      console.log("[server]: Cleaning up server process");
      this.child.kill("SIGKILL");
      this.child = null;
    }
  }
}

module.exports = ServerStartPlugin;
