const AWS = require("aws-sdk");
const dynamoOptions = require("./dev.config").dynamoOptions;
const dynamodb = new AWS.DynamoDB(dynamoOptions);

const initialData = [
    { id: "1", name: "Sample1", priceUsd: 1000 },
    { id: "2", name: "Sample2", priceUsd: 2000 }
];

const createTablesParams = {
    AttributeDefinitions: [
        {
            AttributeName: "Name",
            AttributeType: "S"
        },
        {
            AttributeName: "PriceUsd",
            AttributeType: "N"
        }
    ],
    KeySchema: [
        {
            AttributeName: "Name",
            KeyType: "HASH"
        },
        {
            AttributeName: "PriceUsd",
            KeyType: "RANGE"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    },
    TableName: "Products"
};

const insertDataParams = {
    RequestItems: {
        "Products": initialData.map(v => ({
            PutRequest: {
                Item: {
                    Name: v.name,
                    PriceUsd: v.priceUsd,
                }
            }
        }))
    }
};

dynamodb.createTable(createTablesParams, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
        console.log(data);           // successful response
        dynamodb.batchWriteItem(insertDataParams, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data);           // successful response
        });
    }
});

