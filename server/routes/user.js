import express from 'express';
import { addNewUser } from '../controller/user';

const router = express.Router();

router.get('/', addNewUser);

export default router;