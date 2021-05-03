import { Request, Response, NextFunction } from 'express';

// handle registration here

// '/user/register'
// if user is logged out (no sesstion token or w/e)
// then bring up registration page
// username, password fields for sure, email verification as well
// CRUD functions
const read = (req: Request, res: Response, next: NextFunction): void => {
    res.send("read function works");
    res.status(200);
}
const register = (req: Request, res: Response, next: NextFunction): void => {
    // we want to read the input friom a request
    // in the request body will be a username, email, and password.
    // we will take the username, we salt and hash the password, then we insert that user into the database
    
    
    res.send("register function works");
    res.status(200);
}
const remove = (req: Request, res: Response, next: NextFunction): void => {
    res.send("remove function works");
    res.status(200);
}
const update = (req: Request, res: Response, next: NextFunction): void => {
    res.send("update function works");
    res.status(200);
}
const validate = (req: Request, res: Response, next: NextFunction): void => {
    res.send("validate function works");
    res.status(200);
}
const login = (req: Request, res: Response, next: NextFunction): void => {
    res.send("login function works");
    res.status(200);
}



export default {
    validate, login, register, read, remove, update
}