import { Express, Request, Response } from "express";

import { getEmailsHandler } from "./controller/email.controller.js";


export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
  
  // Get Email
  app.get("/api/v1/generateEmail", getEmailsHandler);

}