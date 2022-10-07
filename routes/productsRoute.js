import express from 'express';
const router = express.Router();

import { getProduct, updateCarts } from '../controllers/productController.js';

router.get('/', getProduct);
router.post("/carts/add", updateCarts);

export default router;