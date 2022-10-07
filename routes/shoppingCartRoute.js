import express from 'express';
import { getShoppingCart, deleteShoppingCart, postShoppingCart, getConfirmCart } from '../controllers/shoppingCartController.js';

const router = express.Router();



router.get("/",getShoppingCart);
router.delete('/(:id)', deleteShoppingCart);
router.post("/buy", postShoppingCart);
router.get('/confirm', getConfirmCart);

export default router;