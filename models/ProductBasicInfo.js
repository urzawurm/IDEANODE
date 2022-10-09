import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductBasicInfoSchema = new Schema({
  productId: {
    type: String,
    require: true,
  },
   productName: {
    type: String,
    require: true,
   },
   type: {
    type: String,
    default: 0,
    require: true,
   },
    date: {
      type: Date,
      default: Date.now
   }
});

const ProductBasicInfos = mongoose.model("productBasicInfos", ProductBasicInfoSchema);
export default ProductBasicInfos;
