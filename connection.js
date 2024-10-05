const mongoose=require('mongoose');

connectMongo=async (url)=>{
    return mongoose.connect(url);
};

module.exports=connectMongo;