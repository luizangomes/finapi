const express = require('express');

const app = express();

app.use(express.json());

//localhost:3333
app.listen(3333);