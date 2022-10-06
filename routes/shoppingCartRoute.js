import express from 'express';
import { getShoppingCart } from '../controllers/shoppingCartController.js';

const router = express.Router();



router.get("/",getShoppingCart);

export default router;