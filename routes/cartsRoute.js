import express, { Router } from"express";
import Cart from '../models/Cart.js'
import {postCart} from "../controllers/cartController.js"

const router=express.Router();
router.post("/add",postCart);

/*
router.post("/add",function(req,res){
     console.log("This is req carts", req)//把data入data base
     const newCart= new Cart({ //放入db.OBJ same with schema
         id: req.body.id,
         productId: req.body.productId,
         qty: req.body.qty,
      
})
*/

export default router;