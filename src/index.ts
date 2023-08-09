import message from "~/util/message";
import express from "express";
message("Build Process 0.0.1");
export class TestModule {
  private mainRouter;

  constructor() {
    this.mainRouter = express.Router();
    this.mainRouter.get('/testmodule', (req, res) => res.json({path: '/testmodule'}))
  }

  get mountingPoint() {
    return this.mainRouter;
  }
}
