// npm install aws-sdk
var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = 'us-east-1';

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : 'dearDiary',

    //Use the KeyConditionExpression parameter to provide a specific value for the partition key
    'KeyConditionExpression': '#dt = :date AND #img = :image', 
    'ExpressionAttributeNames': { // name substitution, used for reserved words in DynamoDB
        "#dt" : 'date',
        "#img" : 'image'
    },
    'ExpressionAttributeValues': { // the query values
        ':date': {S: 'Oct 12 2018'},
        ':image': {S: 'image'}
        // ":minDate": {N: new Date("September 1, 2018").valueOf().toString()},
        // ":maxDate": {N: new Date("October 16, 2018").valueOf().toString()}
    }
};

console.log(params);
dynamodb.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        //console.log(data);
        data.Items.forEach(function(item) {
            console.log("***** ***** ***** ***** ***** \n", item);
        });
    }
});