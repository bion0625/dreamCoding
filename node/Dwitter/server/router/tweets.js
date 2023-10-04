import express from 'express';
import 'express-async-error';
import * as tweetController from '../controller/tweets.js';
import { body, param, query, validationResult } from 'express-validator';

const router = express.Router();

const validation = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    return res.status(400).json({ message: errors.array()[0].msg });
};

// GET /tweets
// GET /tweets?username=username
router.get('/', query('username').trim().isLength({min:2}).withMessage('이름은 두 글자 이상'), validation, tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', param('id').trim().isInt().withMessage('유효한 아이디가 아닙니다'), validation, tweetController.getTweet)

// POST /tweets
router.post(
    '/', 
    [
        body('name').trim().isLength({min:2}).withMessage('이름은 두 글자 이상'), 
        body('text').trim().isLength({min:2}).withMessage('내용은 두 글자 이상'), 
        body('username').trim().isLength({min:2}).withMessage('아이디는 두 글자 이상') , 
    ],
    validation,
    tweetController.createTweet);

// PUT /tweets/:id
router.put(
    '/:id', 
    [
        param('id').trim().isInt().withMessage('유효한 아이디가 아닙니다'), 
        body('text').trim().isLength({min:2}).withMessage('내용은 두 글자 이상'), 
    ],
    validation,
    tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id',param('id').trim().isInt().withMessage('유효한 아이디가 아닙니다'), validation, tweetController.deletTweet);

export default router;