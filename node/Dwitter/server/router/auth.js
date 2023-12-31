import express from 'express';
import * as authController from '../controller/auth.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

const validateCredential = [
    body('username')
        .trim()
        .isLength({min:5})
        .withMessage('username(id) should be at least 5 characters'), 
    body('password')
        .trim()
        .isLength({min:5})
        .withMessage('password should be at least 5 characters'), 
    validate,
]

const validateSignup = [
    ...validateCredential,
    body('name').notEmpty().withMessage('Name is missing'), 
    body('email').isEmail().normalizeEmail().withMessage('Write the email'), 
    body('url')
        .isURL().withMessage('Invalid URL')
        .optional({nullable: true, checkFalsy: true}), 
    validate,
];

router.post('/signup', validateSignup, authController.signup);

router.post('/login', validateCredential, authController.login);

router.get('/me', isAuth, authController.me);


export default router;