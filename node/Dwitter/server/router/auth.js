import express from 'express';
import { login, signup, validation } from '../controller/auth.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

const loginCheck = [
    body('username').trim().isLength({min:2}).withMessage('Id is too short'), 
    body('password').trim().isLength({min:5}).withMessage('Password is too short'), 
]

const validator = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    return res.json({msg : errors.array().reduce((a, b) => `${b.msg} / ${a}`, "")});
}

router.post(
    '/signup', 
    loginCheck,
    [
        body('name').trim().isLength({min:2}).withMessage('Name is too short'), 
        body('email').trim().isEmail().withMessage('Write the email').normalizeEmail(), 
        body('url').trim().isURL().withMessage('Write the url'), 
    ],
    validator,
    signup
    );

router.post('/login', loginCheck, validator, login);

router.get('/me', body('username').trim().isLength({min:2}).withMessage('Id is too short'), validator, validation);


export default router;