const User=require('../models/user');
const Apparel=require('../models/apparel');
const { setUser } = require('../services/auth');
const upload = require('../services/fileupload');



//handle sign up
const handleUserSignup = async (req, res) => {
    const { username, email, password} = req.body;
    // Check if the username contains spaces
    if (/\s/.test(username)) {
        return res.status(400).render('signup', {
            err: 'Username should not contain spaces. Please remove spaces and try again.'
        });
    }

    //create user document
    const createdUser=await User.create({ username, email, password});

    //set token and redirect to home
    const token=setUser(createdUser._id);
    res.cookie('token', token, { httpOnly: true });
    return res.status(200).redirect('/home');    
};

//handle login
const handleUserLogin = async (req, res) => {

    //check if user exists
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    //if user does not exist, return error
    if (!user) {
        return res.status(400).render('login', {
            err: 'invalid username or password'
        });
    }
    //set token and redirect to home
    const token=setUser(user._id);
    res.cookie('token', token, { httpOnly: true });
    return res.status(200).redirect('/home');
};

const handleAddItem=async (req,res,imageName)=>{
    const {apparelType,apparelSize,apparelRole}=req.body;
    const belongsTo=req.userid;
    imageName=imageName || 'default.png';
    const createdApparel=await Apparel.create({apparelType,apparelSize,apparelRole,belongsTo,imageName});
    return res.status(201).render('additem',{
        success: 'Item added successfully'
    });

};

const handleDeleteItem=async (req,res)=>{
    const {apparelID}=req.body;
    await Apparel.deleteOne({_id: apparelID});
    res.sendStatus(201);
};

module.exports = {
    handleUserSignup,
    handleUserLogin,
    handleAddItem,
    handleDeleteItem,
};