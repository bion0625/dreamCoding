import express from 'express';
import 'express-async-error';
import { body, param, query } from 'express-validator';
import * as tweetController from '../controller/tweets.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateTweet = [
    body('text').trim().isLength({min: 3}).withMessage('text should be at least 3 charaters'),
    validate,
];

// GET /tweets
// GET /tweets?username=username
router.get('/', tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', param('id').trim().isInt().withMessage('유효한 아이디가 아닙니다'), validate, tweetController.getTweet)

// POST /tweets
router.post(
    '/', 
    validateTweet,
    tweetController.createTweet);

// PUT /tweets/:id
router.put(
    '/:id', 
    validateTweet,
    tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id',param('id').trim().isInt().withMessage('유효한 아이디가 아닙니다'), validate, tweetController.deletTweet);

export default router;