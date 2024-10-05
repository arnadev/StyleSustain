const express=require('express');
const router=express.Router();
const User=require('../models/user');
const Item=require('../models/apparel');

router.get('/',async (req,res)=>{
    if(req.userid){
        return res.redirect('/home');
    }
    res.render('index');
});

router.get('/signup',(req,res)=>{
    res.render('signup');
});

router.get('/login',(req,res)=>{
    res.render('login');
});

router.get('/home',async (req,res)=>{
    const user = await User.findOne({_id: req.userid});
    const username = user.username.toUpperCase();
    res.render('home',{
        username:username,
    });
});

router.get('/item',async (req,res)=>{
    const items = await Item.find({belongsTo: req.userid});
    res.render('item',{
        items:items,
    });
});

router.get('/item/add',async (req,res)=>{
    res.render('additem');
});

router.get('/about',async (req,res)=>{
    res.render('about');
});

router.get('/logout',(req,res)=>{
    res.clearCookie('token');
    return res.redirect('/');
});

module.exports = router;