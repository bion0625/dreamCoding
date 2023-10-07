import express from 'express';
import * as authController from '../controller/auth.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

const validator = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    return res.json({msg : errors.array().reduce((a, b) => `${b.msg} / ${a}`, "")});
};

const validateCredential = [
    body('username')
        .trim()
        .isLength({min:5})
        .withMessage('username(id) should be at least 5 characters'), 
    body('password')
        .trim()
        .isLength({min:5})
        .withMessage('password should be at least 5 characters'), 
    validator,
]

const validateSignup = [
    ...validateCredential,
    body('name').notEmpty().withMessage('Name is missing'), 
    body('email').isEmail().normalizeEmail().withMessage('Write the email'), 
    body('url')
        .isURL().withMessage('Invalid URL')
        .optional({nullable: true, checkFalsy: true}), 
    validator,
];

router.post('/signup', validateSignup, authController.signup);

router.post('/login', validateCredential, authController.login);

router.get('/me', body('username').trim().isLength({min:2}).withMessage('Id is too short'), validator, authController.validation);


export default router;