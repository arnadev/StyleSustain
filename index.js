const express=require('express');
const path=require('path');
const cookieParser=require('cookie-parser');
const connectMongo=require('./connection');
const {authenicateUser}=require('./middlewares/auth');




const staticRouter=require('./routes/staticRouter');
const userRouter=require('./routes/user');



const app=express();
const PORT=8002;


//CONNECTION
connectMongo('mongodb://127.0.0.1:27017/stylesustain');


//VIEW
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

//ROUTES
app.use('/',authenicateUser,staticRouter);
app.use('/user',authenicateUser,userRouter);




//RUN
app.listen(PORT,()=>{
    console.log('PlaySync Server is up and running! PORT: '+PORT);
});