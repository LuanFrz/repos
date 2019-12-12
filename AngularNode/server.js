const express = require('express');
const app = express();

app.use(express.static("app"));

app.get('/', (req, res) => {
    res.sendFile('index.html')
});

port = process.env.PORT || 8080;

app.listen(port, console.log("Server running on port " + port));