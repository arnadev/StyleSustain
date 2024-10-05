const express=require('express');
const handlers=require('../controllers/userController');
const upload = require('../services/fileupload');


const router=express.Router();

router.post('/signup',handlers.handleUserSignup);
router.post('/login',handlers.handleUserLogin);
router.post('/item',upload.single('image'),(req,res)=>{
    if(req.file){
    const imageName = `${req.file.filename}`;
    handlers.handleAddItem(req, res, imageName);
    }
    else{
        handlers.handleAddItem(req, res, null);
    }
});

router.delete('/item',handlers.handleDeleteItem);

module.exports = router;