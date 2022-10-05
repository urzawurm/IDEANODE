import Product from "../models/Product.js"

export const getAdmin = (req, res) => {
  res.render("admin");
}

export const postAdmin =(req, res)=>{ 
  Product.findOne({productId: req.body.productId}).then((product)=>{
    if (product) {
      product.qty = product.qty + new Number(req.body.qty);
      product.save().then(() => {
        console.log("warehouse updated !!")
        res.redirect('/admin');
      })

    } else {
      new Product({
        productId: req.body.productId,
        productName: req.body.productName,
        qty: Number(req.body.qty),
        type: req.body.type,
        price: Number(req.body.price)
      }).save().then(() => {
        console.log('update successful!!');
        res.redirect('/admin');
      })
    }
  })
}

export const getWarehouse = (req, res) => {
  Product.find({}).lean().sort({ productId: "asc" }).then((record)=>{
      res.render("warehouse", { allRecord: record});
  });
}

export const deleteProduct = (req, res) => {
  Product.deleteOne({_id: req.params.id})
  .then(()=>{
    res.redirect("/admin/warehouse")
  }).catch((err) => {
    console.log("failed?", err)
  })
}

export const updateProduct = (req, res) => {
  // console.log("product update", req.body);
  console.log("product update id", req.params.id);
  // console.log("product update type", typeof req.body.qty);
  Product.findOne({_id:req.params.id}).then((record)=> {
    console.log("suc?")
    record.qty = Number(req.body.qty); 
    record.price = Number(req.body.price);
    record.save().then(()=>{
      res.redirect("/admin/warehouse");
    }).catch((err) => {
      console.log('update failed')
    })
  });
}

export const getEditProduct = (req, res) => {
  Product.findOne({_id: req.params.id}).lean().then((item) =>{
    console.log({item})
    console.log("id?", req.params.id)
    res.render('editWarehouse', {warehouseItem: item})
  })
}
