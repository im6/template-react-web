import express from "express";
const app = express();
app.get("/todos", (res, req) => {
  req.send([
    { id: 0, name: "do 0" },
    { id: 1, name: "do 1" },
    { id: 2, name: "do 2" },
  ]);
});

export default app;
