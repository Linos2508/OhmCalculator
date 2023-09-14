const router = require('express').Router();
const mysql = require('mysql');
require('dotenv').config();

const startConnection = () => {
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : process.env.USER,
        password : process.env.PASSWORD || '',
        database : process.env.DB
    });
       
    connection.connect();

    return connection;
}

router.route('/').get((req,res) => {
    let response = {
        "data": [],
        "error": ""
    }
    const connection = startConnection();
    connection.query('Select * from tolerance', function (error, results, fields) {
        if (error) throw error;
        response["data"] = results;
        res.json(response);
    })
});

module.exports = router;
