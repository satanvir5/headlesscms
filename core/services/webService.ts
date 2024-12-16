import { Request, Response, NextFunction } from 'express';

export default class WebService {

    public static async get(req: Request, res: Response, next: NextFunction) {
        res.render('index', { title: `Web Service || GET method` });
    }
    public static async post(req: Request, res: Response, next: NextFunction) {
        res.render('index', { title: `Web Service || POST method` });
    }
}