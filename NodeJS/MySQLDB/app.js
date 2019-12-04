const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('short'));

app.get("/", (req, res) => {
    console.log("Response to route ");
    res.send("Hello")
});

app.get("/users", (req, res) => {
    var user = {firstName: "Nome", lastName: "Sobrenome"};
    var user1 = {firstName: "Nombre", lastName: "Surname"};
    res.json([user, user1]);
});

var port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log("Server is running on port "+ port);
});