import * as tweetRepository from '../data/tweets.js';

export const getTweets = (req, res) => {
    const username = req.query.username;
    const data = username 
    ? tweetRepository.getAllByUsername(username)
    : tweetRepository.getAll();
    res.status(200).json(data);
};

export const getTweet = (req, res) => {
    const id = req.params.id;
    const tweet = tweetRepository.getById(id);
    if(tweet){
        return res.status(200).json(tweet);
    }else{
        return res.status(404).json({ message: `Tweet id(${id}) not found` });
    }
};

export const createTweet = (req, res) => {
    const { body: {text, name, username}} = req;
    const tweet = tweetRepository.create(text, name, username);
    res.status(201).json(tweet);
};

export const updateTweet = (req, res) => {
    const {params: {id}, body: {text}} = req;
    const tweet = tweetRepository.update(id, text);
    if(tweet){
        tweet.text = text;
        res.status(200).json(tweet);
    }else{
        res.status(404).json({ message: `Tweet id(${id}) not found` });
    }
};

export const deletTweet = (req, res) => {
    const {params: {id}} = req;
    tweetRepository.remove(id);
    res.sendStatus(204);
};