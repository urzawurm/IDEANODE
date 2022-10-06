import express from 'express';
import { getShoppingCart, deleteShoppingCart } from '../controllers/shoppingCartController.js';

const router = express.Router();



router.get("/",getShoppingCart);
router.delete('/(:id)', deleteShoppingCart);

export default router;