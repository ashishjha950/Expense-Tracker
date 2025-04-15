import express from 'express';
import { addNewUser } from '../controller/user.js`';

const router = express.Router();

router.get('/', addNewUser);

export default router;