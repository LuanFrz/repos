// userController purpose is to create and bind routes for the app, controlling the flow of data into and from the db.

const express = require('express');
const bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var user = require('./User');

router.post('/', function (req, res){
    user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, function (err, user){
        if (err) return res.status(500).send("There was a problem when adding data to database.");
        res.status(200).send(user);
    });
});

router.get('/', function (req, res){
    user.find({}, function (err, users){
        if (err) return res.status(500).send("There was a problem finding the users on the database.");
        res.status(200).send(users);
    });
});

router.get('/:id', function (req, res){
    user.findById(req.params.id, function (err, user){
        if (err) return res.status(500).send("There was a problem findig the user in the database.");
        res.status(200).send(user);
    });
});

router.delete('/:id', function (req, res){
    user.findByIdAndRemove(req.params.id, function (err, user){
        if (err) return res.status(500).send("There was a problem when deleting the specified user: " + err);
        res.status(200).send(`User "` + user.name + `" was deleted.`);
    });
});

router.put('/:id', function (req, res){
    user.findByIdAndUpdate({}, function(err, user){
        if (err) return res.status(500).send("There was a problem updating the user: " + err);
        res.status(200).send(user);
    });
});

module.exports = router;