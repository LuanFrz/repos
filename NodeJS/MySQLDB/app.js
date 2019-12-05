const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

function getConnection () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'MySQL-API'
    });
}

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(bodyParser.json());

// Makes it so the app serves the files on /public.
app.use(express.static('./public'));

app.use(morgan('short'));

app.post('/user_create', (req, res) => {

    const firstName = req.body.createFirstName;
    const lastName = req.body.createLastName;
    
    const queryString = "INSERT INTO users (first_name, last_name) VALUES (?, ?)";
    getConnection().query(queryString, [firstName, lastName], (err, results, fields) => { 
        if (err) {
            console.log("Failed to insert new user: " + err);
            res.sendStatus(500);
            return
        }
        console.log("Inserted a new user with id: ", results.insertId);
        res.end();
    }); 
});

app.get('/user/:id', (req, res) => {

    const userId = req.params.id;
    const connection = getConnection();
    connection.query("SELECT * FROM users WHERE id = ?", [userId], (err, rows, fields) => {
        if (err) {
            console.log("Failed to query to users: " + err);
            res.sendStatus(500);
            return;
        }

        /* For custom formating for the json.
        const users = rows.map((row) => {
            return {firstName: row.first_name, lastName: row.last_name}
        }); */

        res.json(rows);
    });
    //res.end();
});

app.get("/", (req, res) => {
    console.log("Response to route ");
    res.send("Hello")
});

app.get("/users", (req, res) => {

    const connection = getConnection();
    connection.query("SELECT * FROM users", (err, rows, fields) => {
        if (err) {
            console.log("Failed to query for users: " + err);
            res.sendStatus(500)
            return
        }
        res.json(rows);
    });
});

var port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log("Server is running on port "+ port);
});