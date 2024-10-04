const express=require('express');
const handlers=require('../controllers/userRouter');
const upload = require('../services/fileupload');


const router=express.Router();