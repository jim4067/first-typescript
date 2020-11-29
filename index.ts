const express = require('express');

const app = express();

app.get('/ping', (_req, res) => {
    res.send("this shit better work this time");
});

const PORT = 3040;

app.listen(PORT, () => {
    console.log(`successfully running the app on port ${PORT}`);
});

//importing causes the error that express.1 has a problem