"use strict";
console.log("[INFO] Webserver started.");

const PORT = 3000;

const express = require('express');
const app = express();

app.use(express.static('website'));

console.log(`[INFO] Webserver listening on Port ${PORT}`);

console.log(`http://localhost:${PORT}`)

app.listen(PORT);