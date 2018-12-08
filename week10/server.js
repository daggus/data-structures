var express = require('express'), // npm install express
    app = express();
const { Pool } = require('pg');
var AWS = require('aws-sdk');

// AWS RDS credentials
var db_credentials = new Object();
db_credentials.user = 'brad';
db_credentials.host = 'brad-database02.c3pgqmf4c0fp.us-east-1.rds.amazonaws.com';
db_credentials.database = 'myDb';
db_credentials.password = process.env.AWSRDS_PW;
db_credentials.port = 5432;

// AWS DynamoDB credentials
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";

// respond to requests for /sensor
app.get('/sensorData', function(req, res) {
    
    // Connect to the AWS RDS Postgres database
    const client = new Pool(db_credentials);

    // SQL query 
    // var q = `SELECT EXTRACT(DAY FROM sensorTime) as sensorday,
    //          AVG(sensorValue::int) as num_obs
    //          FROM sensorData
    //          GROUP BY sensorday
    //          ORDER BY sensorday;`;
    
    var q = `SELECT EXTRACT(hour FROM sensorTime) as sensorhour,
             AVG(sensorValue::int) as avg_value
             FROM sensorData
             GROUP BY sensorhour
             ORDER BY sensorhour;`;
             
    // var q = 'SELECT * from sensorData ORDER BY sensorTime';

    client.connect();
    client.query(q, (qerr, qres) => {
        if (qerr) { throw qerr }
        else {
            res.send(qres.rows);
            client.end();
            console.log('1) responded to request for sensor data');
        }
    });
});

// respond to requests for /aameetings
app.get('/aameetings', function(req, res) {
    
    // Connect to the AWS RDS Postgres database
    const client = new Pool(db_credentials);
    
    // SQL query 
    var thisQuery = `SELECT address, long as lon, lat as lat 
                 FROM aalocations;`;

    client.query(thisQuery, (qerr, qres) => {
        if (qerr) { throw qerr }
        else {
            res.send(qres.rows);
            client.end();
            console.log('2) responded to request for aa meeting data');
        }
    });
});

// respond to requests for /deardiary
app.get('/deardiary', function(req, res) {

    // Connect to the AWS DynamoDB database
    var dynamodb = new AWS.DynamoDB();
    
    // DynamoDB (NoSQL) query
    var params = {
        TableName: "dearDiaryDV",
        KeyConditionExpression: "#tp = :image", // the query expression
        ExpressionAttributeNames: { // name substitution, used for reserved words in DynamoDB
            "#tp": "image"
        },
        ExpressionAttributeValues: { // the query values
            ":image": { S: "image" }
        }
    };

    dynamodb.query(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        }
        else {
            res.send(data.Items);
            console.log('3) responded to request for dear diary data');
        }
    });

});

// serve static files in /public
app.use(express.static('public'));

// listen on port 8080
app.listen(8080, function() {
    console.log('Server listening...');
});