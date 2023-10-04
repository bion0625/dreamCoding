import express from 'express';
import { body, check, param, validationResult } from 'express-validator';

const app = express();

app.use(express.json());

app.post(
    '/users', 
    [
        body('name').isLength({min: 2}).withMessage('이름은 두 글자 이상'),
        body('age').notEmpty().isInt().withMessage('숫자를 입력해'), 
        body('email').isEmail().withMessage('이메일 입력해요'),
        body('job.name').notEmpty(),
    ],
    (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty){
        return res.status(400).json({message: errors.array()})
    }
    console.log(req.body);
    // if(req.body.email..){
    //     res.status(400).send({ message: 'email!!!' })
    // } else if() ...
    res.sendStatus(201);
});

app.get('/:email', 
    param('email').isEmail().withMessage('이메일 입력해요'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(errors.isEmpty){
            return res.status(400).json({message: errors.array()})
        }
    res.send('❤');
})


app.listen(8080);