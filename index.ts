import express from 'express';

const app = express();

app.get('/ping', (_req, res) => {
    res.send("this shit better work");
});

const PORT = 3040;

app.listen(PORT, () => {
    console.log(`succesfully running the app on port ${PORT}`)
});