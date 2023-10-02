import express from 'express';
import tweetRouter from './router/tweets.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST , PUT, DELETE');
    next();
});

app.use('/tweets', tweetRouter);
app.get('/', (req, res) => {
    res.send('API START !!!')
})

app.listen(8080);