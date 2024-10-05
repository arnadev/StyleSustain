const {getUser}=require('../services/auth');
const User=require('../models/user');


const openPaths=['/','/signup','/login','/about','/user/signup','/user/login'];
const authenicateUser=async (req,res,next)=>{
    if(openPaths.includes(req.path)){
        return next();
    }
    const token=req.cookies.token;
    const userid=getUser(token);
    req.userid=userid;
    if(!req.userid){
        return res.redirect('/login');
    }
    if(!await User.exists({_id:req.userid})){
        return res.redirect('/login');
    }
    next();
};

module.exports={
    authenicateUser,
};