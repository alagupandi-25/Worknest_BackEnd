"use strict";

const jwt = require('jsonwebtoken');

const authenticateToken = (req , res , next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    
    if(!token){
        return res.status(401).json({
            message : "Token missing"
        })
    }

    jwt.verify(token, process.env.SECRET_KEY, (err , decoded) => {
        if(err){
            return res.status(403).json({
                message : 'Invalid or expired token'
            })
        }
        req.jwtdata = decoded;
        
        next();
    });
}; 

const authorizeRoles = (...allowedRole) => {
    return (req, res , next) => {
        const tokenInfo = req.jwtdata;

        if (!tokenInfo) {
            return res.status(401).json({ 
                message: 'Unauthorized: No user information found' 
            });
        }

        if (!allowedRole.includes(tokenInfo.role)) {
            return res.status(403).json({ 
                message: `Access denied: Role '${tokenInfo.role}' is not allowed`
            });
        }

        next();
    }
};

module.exports = {
    authenticateToken,
    authorizeRoles,
}