import { FastifyPluginCallback } from "fastify";

interface PluginOptions {
  //...
}

// Optionally, you can add any additional exports.
// Here we are exporting the decorator we added.
export interface myPluginFunc {
  (input: string): string;
}

// Most importantly, use declaration merging to add the custom property to the Fastify type system
declare module "fastify" {
  interface FastifyInstance {
    myPluginFunc: myPluginFunc;
  }
}

// fastify-plugin automatically adds named export, so be sure to add also this type
// the variable name is derived from `options.name` property if `module.exports.myPlugin` is missing
export const myPlugin: FastifyPluginCallback<PluginOptions>;

// fastify-plugin automatically adds `.default` property to the exported plugin. See the note below
export default myPlugin;
