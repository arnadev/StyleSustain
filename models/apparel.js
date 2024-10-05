const mongoose=require('mongoose');
const itemSchema=new mongoose.Schema({
    apparelType:{
        type: String,
        required: true,
        unique: true,
    },
    apparelSize: {
        type: String,
        required: true,
        unique: true,
    },
    apparelRole: {
        type: String,
        enum: ['disposal', 'donation','recycling'],
    },
    belongsTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    imageName: {
        type: String,
        default: 'default.png',
    },
},{timestamps: true});

const User=mongoose.model('apparel',itemSchema);
module.exports=User;