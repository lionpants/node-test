var sql = require('mssql');

var config = {
    user: 'mlsuser',
    password: 'mlsuser',
    server: 'DEVDB1\\sql2k12std', // You can use 'localhost\\instance' to connect to named instance
    database: 'mlsmaster',

    options: {
        port: 49557,
        encrypt: true // Use this if you're on Windows Azure
    }
};

exports.executeQuery = function (query) {
    var connection = new sql.Connection(config, function (err) {
        var request = new sql.Request(connection); // or: var request = connection.request();
        request.query(query, function (err, recordset) {
            if (err) console.log(err);
            else console.log(recordset);
        });
    });

    connection.on('error', function (err) {
        console.log(err);
    });
};