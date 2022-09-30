import Product from "../models/Product.js"
export const postAdmin =(req,res)=>{ 
    // const newProduct={ //waiter req比 水吧
    //     productId:req.body.productId,
    //     productName:req.body.productName,
    //     storeQty:req.body.storeQty,
    //     type:req.body.type,
    // }
    Product.findOne({productId: req.body.productId}).then((product)=>{
        if (product) {
            console.log("product",product);
        }
    })    //imported
    /*new Product({
        productId:req.body.productId,
        productName:req.body.productName,
        qty:req.body.storeQty,
        type:req.body.type,
    }).save().then(()=>{
        res.redirect('/admin')
    })*/
    // console.log(req.body)
}


/*Cart.findOne({id:res.locals.user._id,productId: req.body.productId,}).then((cart)=>{
    if(!cart) {
        new Cart(newCarts).save().then((cart)=>{ //if cart無野
        console.log("this is cart",cart)
        req.flash("success_msg","Note Added !"); //出success added的msg 通知
        res.redirect("/product"); //redirect 上一版
        }).catch((err)=>{
            console.log("this is err",err)
        })
    };//cart emty 
    cart.productId=req.body.productId;  //else cart 有野
    cart.qty=req.body.productNum;
    cart.save().then((item)=>{
        console.log(item)
        // req.flash("success_msg","Note Update !"); //出success update的msg 通知
        // res.redirect("/ideas");
    });
    console.log("this is product Id",cart)
}).catch(err => {
    console.log('this is err')
})*/