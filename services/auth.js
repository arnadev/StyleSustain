const jwt=require('jsonwebtoken');
const secretKey='my$private$server$8703';

const setUser = (userId) => {
    const payload = { userId };
    return jwt.sign(payload, secretKey);
};


const getUser = (token) => {
    if (!token) return null;
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded.userId;
    } catch (err) {
        console.error('Error occurred during token verification:', err);
        return null;
    }
};


module.exports={
    setUser,
    getUser,
};