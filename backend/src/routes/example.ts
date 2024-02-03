import express, { Router, Request, Response } from "express";
import {employeeFeedback} from "common/src/types";

const router: Router = express.Router();

let database: employeeFeedback[] = [];

router.post("/", async function (req: Request, res: Response) {
    const test: employeeFeedback = req.body;
    console.log(test);
    database.push(test);
    console.log(database);
    res.status(200).json("added db object");
});

// Whenever a get request is made, return the high score
router.get("/", async function (req: Request, res: Response) {
    res.status(200).json(database);
});

export default router;
