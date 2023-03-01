const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
});
app.get('/one', (req, res) => {
    res.send("Hello World from route ONE!");
});
app.get('/prueba', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Test</h1>
        Esto es una prueba
    </body>
    </html>`);
});
app.listen(3000);