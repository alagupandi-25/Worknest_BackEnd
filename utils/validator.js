"use strict";

const emailValidator  = function (email) {
    if (!email || typeof email !== "string") 
        return false;

    email = email.toLowerCase();
    const gmailRegex = /^[a-z0-9](\.?[a-z0-9]){4,28}[a-z0-9]@gmail\.com$/;
    const username = email.split("@")[0];

    if (!gmailRegex.test(email)) 
        return false;
  
    if (username.includes("..")) 
        return false;
  
    if (username.startsWith(".") || username.endsWith("."))
        return false;
  
    if (username.length < 6 || username.length > 30) 
        return false;

    return true;
}

const phoneValidator = function (phone) {
    return /^\d{10}$/.test(v); 
}


module.exports = {
    emailValidator,
    phoneValidator,
}
