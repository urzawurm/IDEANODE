// import mongoose from "mongoose";
// const {Schema} = mongoose;

// const productSchema = new Schema({
//     productId: {
//         type: String,
//         required: true,
//     },
//     productName: {
//         type: String,
//         required: true,
//     },
//     storeQty: {
//         type: String,
//         required: true,
//     },
//     type:{
//         type: String,
//         required: true,
//     },
//    /*photo: {
//         type: String,
//         required: true,
//     },*/
//     date: {
//         type: Date,
//         default: Date.now,
//     },
// });
// const Product = mongoose.model("Product", productSchema);
// export default Product;


import mongoose, {mongo} from "mongoose";
const {Schema} = mongoose;

const ProductSchema = new Schema({
    productId:{
        type:Number,
        required:true,
    },
    productName:{
        type:String,
        required:true,
    },
   
    qty:{
        type:Number,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },

    date:{
        type:Date,
        default:Date.now,
    },
    
});

const Product = mongoose.model("products",ProductSchema);
export default Product;