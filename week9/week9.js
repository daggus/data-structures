const { Client } = require('pg');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'brad';
db_credentials.host = 'brad-database02.c3pgqmf4c0fp.us-east-1.rds.amazonaws.com';
db_credentials.database = 'myDb';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;
console.log(db_credentials.password);
// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

var thisQuery = "CREATE TABLE IF NOT EXISTS sensorData ( sensorValue int, sensorTime timestamp DEFAULT current_timestamp );";
//var thisQuery = "DROP TABLE sensorData";

client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});
