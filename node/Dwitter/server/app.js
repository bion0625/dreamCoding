import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-error';
import tweetRouter from './router/tweets.js';
import authRouter from './router/auth.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST , PUT, DELETE');
    next();
});

app.use('/tweets', tweetRouter);
app.use('/auth', authRouter)
app.get('/', (req, res) => {
    res.send('API START !!!')
});

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
})

app.listen(8080);