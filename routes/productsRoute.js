import express from 'express';
const router = express.Router();

import { getProduct, updateProduct } from '../controllers/productController.js';

router.get('/', getProduct);
router.post("/carts/add", updateProduct);

export default router;