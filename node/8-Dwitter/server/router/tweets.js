import express from 'express';
import 'express-async-error';

let tweets = [
    {
      id: 1,
      text: '드림코더분들 화이팅',
      createdAt: Date.now().toString(),
      name: 'Bob',
      username: 'bob',
      url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
    {
        id: 2,
        text: '드림코더분들 화이팅',
        createdAt: Date.now().toString(),
        name: 'UJ',
        username: 'uj',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
      },
  ];

const router = express.Router();

// GET /tweets
// GET /tweets?username=username
router.get('/', (req, res) => {
    const username = req.query.username;
    const data = username ? tweets.filter(t => t.username === username)
    : tweets;
    res.status(200).json(data);
});

// GET /tweets/:id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const tweet = tweets.find(t => t.id == id);
    if(tweet){
        return res.status(200).json(tweet);
    }else{
        return res.status(404).json({ message: `Tweet id(${id}) not found` });
    }
})

// POST /tweets
router.post('/', (req, res) => {
    const { body: {text, name, username}} = req;
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username,
    }
    tweets = [tweet, ...tweets];
    res.status(201).json(tweet);
});

// PUT /tweets/:id
router.put('/:id', (req, res) => {
    const {params: {id}, body: {text}} = req;
    const tweet = tweets.find(t => t.id == id);
    if(tweet){
        tweet.text = text;
        res.status(200).json(tweet);
    }else{
        res.status(404).json({ message: `Tweet id(${id}) not found` });
    }
});

// DELETE /tweets/:id
router.delete('/:id', (req, res) => {
    const {params: {id}} = req;
    tweets = tweets.filter(tweet => tweet.id != id);
    res.sendStatus(204);
});









export default router;