import express from 'express';

let tweets = [
    {
      id: 1,
      text: '드림코딩에서 강의 들으면 너무 좋으다',
      createdAt: '2021-05-09T04:20:57.000Z',
      name: 'Bob',
      username: 'bob',
      url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
  ];

const router = express.Router();

router.get('/', (req, res) => {
    res.json(tweets);
});

router.post('/', (req, res) => {
    const { body: {tweet}} = req;
    tweets.unshift(tweet);
    res.status(201).send('success');
});

router.delete('/:id', (req, res) => {
    const {params: {id}} = req;
    tweets = tweets.filter(tweet => String(tweet.id) !== String(id));
    res.status(204).send('success');
});

router.put('/:id', (req, res) => {
    const {params: {id}, body: {text}} = req;
    const tweet = tweets.find(tweet => String(tweet.id) === String(id));
    tweet.text = text;
    res.status(200).send('success');
})

export default router;