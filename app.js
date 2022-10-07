import express from "express";
import {engine} from "express-handlebars";//係distructure,{engine}係function ,用obj包住，要抽佢地址黎用，same with routes
import mongoose from "mongoose";//load mongoose
import flash from "connect-flash";
import session from "express-session";

import bodyParser from "body-parser";
import morgan from "morgan";
import methodOverride from "method-override";
import ideasRoute from "./routes/ideasRoute.js";
import usersRoute from "./routes/usersRoute.js";
import cartsRoute from "./routes/cartsRoute.js";
import shoppingCartRoute from "./routes/shoppingCartRoute.js";
//import productsRoute from "./routes/productsRoute.js";
import {postAdmin} from "./controllers/adminController.js";

import passport from "passport";
import passportConfig from "./config/passportConfig.js" //外來野，可以放入config file,似3rd pugin ,不會影響個app
passportConfig(passport);
import dotenv from "dotenv";
import mongoURI from"./config/database.js";
import adminRoute from './routes/adminRoute.js'; 
import productRoute from './routes/productsRoute.js';

dotenv.config();
console.log(process.env.PORT);
console.log(process.env.mongoURI);


//getIdeas成個ideas攞入黎，其他Idea係獨立
const app = express();

mongoose
.connect(mongoURI)//把date save入note dev file,mongoURI
.then(()=> console.log("Mongodb connected.."))
.catch(err=>console.log("this connect err", err));

//load Idea Model
import Idea from "./models/Idea.js"; //"Idea"係JS class，所以一定要用大草
//const Idea = mongoose.model ("ideas") 有s會有api跟住
//beginning of middleware,middleware最難寫
app.use(express.static("views/public"));//要加本地圖片一定要入呢個
app.engine("handlebars", engine()); //use template engine
app.set("view engine","handlebars");
app.set("views","./views"); //file名，位置mvc既V
app.use(morgan("tiny"));
app.use(methodOverride("_method"));
app.use(
    session({
    secret:"anything",
    resave: true,
    saveUninitialized: true,
    // cookie:{
    //     maxAge: 100 * 1000 //10秒後logout
    // }
})
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
app.use(function(req,res,next){ //next 入
    res.locals.success_msg=req.flash("success_msg");
    res.locals.error_msg=req.flash("error_msg");
    res.locals.fail_passport=req.flash("fail_passport");
    res.locals.user = req.user || null;
    //add console.log for user status checking
    console.log("======login user======",res.locals.user);
    console.log("======id======",res?.locals?.user?._id);
    next();//next 出
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//routes render pages inside the views folder
//send the render page by changing send function render function
app.get("/", (req,res)=>{ //get指令:做完over,會自動加(),所以get(x=>())=(x=>())()
    const title = "THE LORA";// varlue title pass入Obj:title,在index加左個title,為何index不加Welcome？只需pass個地址,放便pass更多的varlue
    res.render("Index",{title:title}); //OBJ,{title:title}
});
app.use("/products", productRoute);
app.use("/shoppingCart", ensureAuthenticated, shoppingCartRoute);
app.get("/about",(req,res)=>{
    res.render("about");
});

import ensureAuthenticated from "./helpers/auth.js"; 

//把data save入 data base,middle ware ,在routes/ideasRoute.js
app.use("/ideas", ensureAuthenticated, ideasRoute); 
app.use("/users", usersRoute);
app.use("/carts", cartsRoute); //自己作 req path
//app.use("/products", productsRoute);
app.use('/admin', adminRoute);
app.use("/*",(req,res)=>{
    res.status(404);
    res.render("404");
});
const PORT = process.env.PORT || 3000;
app.listen(3000,()=>{
    console.log(`server started on port ${PORT}`);
});
