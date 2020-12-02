// const express = require('express');
import express from 'express';
import { calculator } from './calc';

const app = express();

app.get('/ping', (_req, res) => {
    res.send("this shit better work this time");
});

app.get('/calculate', (req, res) => {
    const { val1, val2, op } = req.query;


    const result = calculator(Number(val1), Number(val2), op);
    res.send(`the result of ${val1} plus ${val2} is ${result}`);
});

const PORT = 3040;

app.listen(PORT, () => {
    console.log(`successfully running the app on port ${PORT}`);
});

