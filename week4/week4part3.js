const { Client } = require('pg');
var async = require('async');
var fs = require('fs');


// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'brad';
db_credentials.host = 'brad-database02.c3pgqmf4c0fp.us-east-1.rds.amazonaws.com';
db_credentials.database = 'myDb';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

var addressesForDb = JSON.parse(fs.readFileSync("week3.json"));

async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.streetAddress + "', " + value.lat + ", " + value.long + ");";
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
}); 