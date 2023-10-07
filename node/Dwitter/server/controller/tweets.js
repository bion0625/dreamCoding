import * as tweetRepository from '../data/tweets.js';

export const getTweets = async (req, res) => {
    const username = req.query.username;
    const data = await (username 
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll());
    res.status(200).json(data);
};

export const getTweet = async (req, res) => {
    const id = req.params.id;
    const tweet = await tweetRepository.getById(id);
    if(tweet){
        return res.status(200).json(tweet);
    }else{
        return res.status(404).json({ message: `Tweet id(${id}) not found` });
    }
};

export const createTweet = async (req, res) => {
    const { body: {text}, userId} = req;
    const tweet = await tweetRepository.create(text, userId);
    res.status(201).json(tweet);
};

export const updateTweet = async (req, res) => {
    const {params: {id}, body: {text}} = req;
    const tweet = await tweetRepository.update(id, text);
    if(tweet){
        tweet.text = text;
        res.status(200).json(tweet);
    }else{
        res.status(404).json({ message: `Tweet id(${id}) not found` });
    }
};

export const deletTweet = async (req, res) => {
    const {params: {id}} = req;
    await tweetRepository.remove(id);
    res.sendStatus(204);
};