import { Router } from 'express';
import MainController from '../controllers/main.controller';

const mainController = new MainController();
const router = Router();

router.get('/', mainController.index);

export default router;