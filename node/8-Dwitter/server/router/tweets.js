import express from 'express';
import 'express-async-error';
import * as tweetController from '../controller/tweets.js';

const router = express.Router();

// GET /tweets
// GET /tweets?username=username
router.get('/', tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', tweetController.getTweet)

// POST /tweets
router.post('/', tweetController.createTweet);

// PUT /tweets/:id
router.put('/:id', tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', tweetController.deletTweet);

export default router;