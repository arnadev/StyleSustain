const mongoose=require('mongoose');
const donationSchema=new mongoose.Schema({
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
    apparelAction: {
        type: String,
        enum: ['disposal', 'donation','recycling'],
        default: 'customer',
    },
    belongsTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        unique: true,
    }
},{timestamps: true});

const User=mongoose.model('user',userSchema);
module.exports=User;