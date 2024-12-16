import logger from "../../shared/utils/logger";
import { Request, Response, NextFunction } from 'express';
import { ENV_CONFIG } from "../../config/environment";
import WebService from "../services/webService";

export default class WSController {

    public static async index(req: Request, res: Response, next: NextFunction) {
        const method = req.method; // HTTP method (GET, POST, etc.)
        const uri = req.params[0]; // URI string after "/ws/"

        // Handle your logic here
        if (method === 'GET') {
            WebService.get(req, res, next);
        } else if (method === 'POST') {
            WebService.post(req, res, next);
        } else {
            res.status(405).send(`Method ${method} not allowed`);
        }
    }

}