import express, { Application, Request, Response, NextFunction } from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
    res.render('index', { title: 'Hello World' });
});
router.get('/ws', function (req: Request, res: Response, next: NextFunction) {
    res.render('index', { title: 'Hello World' });
});
router.get('/content', function (req: Request, res: Response, next: NextFunction) {
    res.render('index', { title: 'Hello World' });
});

export default router;
