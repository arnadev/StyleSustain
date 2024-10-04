const express=require('express');
const router=express.Router();
const User=require('../models/user');
const Donation=require('../models/donation');

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

module.exports = router;