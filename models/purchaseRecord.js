import mongoose from "mongoose"; //schema: save data大綱
const {Schema} = mongoose;

const purchaseRecordSchema = new Schema({
    userId: {
      type: String,
      required:true,
    },
    productId: { //產品種類
      type: String,
      required: true,
    }, 
    qty:{ //產品數量
        type: Number,
        required:true
    },
    price: {
      type: Number,
      required: true
    },
    type: {
      type: Number,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    date: { //加入日期記錄
        type: Date,
        default: Date.now,
    },
});
const purchaseRecord = mongoose.model("purchaseRecords", purchaseRecordSchema); //search mongodb db.carts.find()
export default purchaseRecord;