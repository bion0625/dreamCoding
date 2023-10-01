const http = require('http');
// const http2 = require('http2');
const fs = require('fs');
const ejs = require('ejs');

const name = 'UJ';
const courses = [
    {name: 'HTML'},
    {name: 'CSS'},
    {name: 'JS'},
    {name: 'NODE'},
    {name: 'frontend'},
];
const server = http.createServer((req, res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if(url === '/'){
        ejs.renderFile('./template/index.ejs', {name}).then(data => res.end(data));
    } else if (url === '/courses'){
        ejs.renderFile('./template/courses.ejs', {courses}).then(data => res.end(data));
    } else {
        ejs.renderFile('./template/not-fount.ejs', {name}).then(data => res.end(data));
    }
});

server.listen(8080);