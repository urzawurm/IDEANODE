import express, { Router } from"express";
import Cart from '../models/Cart.js'
import {postCart} from "../controllers/cartController.js"

const router=express.Router();
router.post("/add",postCart);


export default router;