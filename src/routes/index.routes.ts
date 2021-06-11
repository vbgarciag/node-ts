import { Router } from "express";
import MainRouter from './main.routes';

const router = Router();

router.use('/', MainRouter);

export default router;