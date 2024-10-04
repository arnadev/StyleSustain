const multer=require('multer');
const path=require('path');

const storage=multer.diskStorage({ 
    destination:function(req,file,cb){
        cb(null,'./public/images');
    },
    filename:function(req,file,cb){
        cb(null,req.userid+'_donation_'+Date.now()+path.extname(file.originalname));
    }
});

const upload=multer({storage});
module.exports=upload;