var AWS = require("aws-sdk");
const config = require("./dev.config");

AWS.config.update(config.dynamoOptions);

var dynamodb = new AWS.DynamoDB();
var params = {
    TableName: config.tableName,
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },  //Partition key
    ],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "S" },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};
dynamodb.createTable(params, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});