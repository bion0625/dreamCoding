import express from "express";

const app = express();

app.use(express.json());

app.get('/posts', (req, res, next) => {
    res.status(201).send('GET: /posts');
})

app.post('/posts', (req, res, next) => {
    res.status(201).send('POST: /posts');
})

app.put('/posts/:id', (req, res) => {
    res.status(201).send('PUT: /posts/:id');
})

app.delete('/posts/:id', (req, res) => {
    res.status(201).send('DELETE: /posts/:id');
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Somgthing went wrong' });
})

app.listen(8080);