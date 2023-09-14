const mysql = require('mysql');

const startConnection = () => {
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'test'
    });
       
    connection.connect();

    return connection;
}
