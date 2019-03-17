var AWS = require("aws-sdk");
const options = require("./dev.config").dynamoOptions;
AWS.config.update(options);

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName: "Products"
};
dynamodb.deleteTable(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
});