import { Request, Response } from "express";

export default class MainController {
    index(req: Request, res: Response): void {
        res.send('Welcome to my app!');
    }
}