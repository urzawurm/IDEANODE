import express from 'express';
const router = express.Router();

import { getProduct } from '../controllers/productController.js';

router.get('/', getProduct);

export default router;