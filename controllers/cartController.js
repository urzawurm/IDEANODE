import User from '../models/User.js';

export const postCart = (req, res) => {
    console.log("hihi", req.body)
}
// import Cart from "../models/Cart.js";

// export const postCart=(req,res)=>{ //postCart=refactor function
//     const newCarts={
//         id: res.locals.user._id ,
//         productId: req.body.productId,
//         qty: req.body.productNum,
//     }

//     Cart.findOne({id:res.locals.user._id,productId: req.body.productId,}).then((cart)=>{
//         if(!cart) {
//             new Cart(newCarts).save().then((cart)=>{ //if cart無野
//             console.log("this is cart",cart)
//             req.flash("success_msg","Note Added !"); //出success added的msg 通知
//             res.redirect("/products"); //redirect 上一版
//             }).catch((err)=>{
//                 console.log("this is err",err)
//             })
//         };//cart emty 
//         cart.productId=req.body.productId;  //else cart 有野
//         cart.qty=req.body.productNum;
//         cart.save().then((item)=>{
//             console.log(item)
//             // req.flash("success_msg","Note Update !"); //出success update的msg 通知
//             // res.redirect("/ideas");
//         });
//         console.log("this is product Id",cart)
//     }).catch(err => {
//         console.log('this is err')
//     })
    
//    /* new Cart(newCarts).save().then((cart)=>{
//         console.log("this is cart",cart)
//         req.flash("success_msg","Note Added !"); //出success added的msg 通知
//         res.redirect("/"); //redirect 上一版
//     }).catch((err)=>{
//         console.log("this is err",err)
//     })*/
    
// }  //放入db.OBJ same with schema
  
