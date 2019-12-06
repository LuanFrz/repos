// This file contains all user related routes.
const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'MySQL-API'
});

function getConnection () {
    return pool;
}

router.post('/user_create', (req, res) => {

    console.log(req.body)

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

router.get("/users", (req, res) => {

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

router.get('/user/:id', (req, res) => {

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

router.get('/messages', (req, res) => {
    console.log("Hi, I'm a message.");
    res.end();
});

module.exports = router;