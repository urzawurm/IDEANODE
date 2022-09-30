import mongoose, {mongo} from "mongoose";
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avatar:{
        data: {type: Buffer},
        contentType: {type: String},
    },
});

const User = mongoose.model("users",UserSchema);
export default User;