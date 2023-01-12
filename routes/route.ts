import { Router, Request, Response } from 'express';
import path from 'path';

const router = Router();

const relativePath = path.join(__dirname + '/../public/');

router.get('/', (req: Request, res: Response) => {
    res.sendFile(relativePath + 'index.html')
});

router.get('/docs', (req: Request, res: Response) => {
    res.sendFile(relativePath + 'doc.html');
});

export default router;