const AWS = require("aws-sdk");
const config = require("./config");
AWS.config.update(config.dynamoOptions);

var docClient = new AWS.DynamoDB.DocumentClient();

const initialData = [
    { id: "1", name: "Sample1", priceUsd: 1000 },
    { id: "2", name: "Sample2", priceUsd: 2000 }
];

initialData.forEach(function (product) {
    console.log(product)
    var params = {
        TableName: config.tableName,
        Item: {
            "id": product.id,
            "name": product.name,
            "priceUsd": product.priceUsd,
        }
    };
    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add Car", product.name, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", product.name);
        }
    });
});

