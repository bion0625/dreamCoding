import express from "express";
// import cors from "cors";
import cookieParser from "cookie-parser"; // cookies
import morgan from "morgan"; // log
import helmet from "helmet"; //security

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST , PUT, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

// app.use(cors({
//     origin: ['http://127.0.0.1:5500/'],
//     optionsSuccessStatus: 200,
//     credentials: true, // Access-Control-Allow-Credentials: true
// }));

app.use(helmet());

app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    console.log(req.body);
    console.log(req.cookies);
    console.log(req.cookies.yummy_cookie);
    console.log(req.cookies.tasty_cookie);
    res.send('Welcome!')
});

app.listen(8080);