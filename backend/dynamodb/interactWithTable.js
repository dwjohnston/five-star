var AWS = require("aws-sdk");
const config = require("./config");
const util = require('util');

AWS.config.update(config.dynamoOptions);

var docClient = new AWS.DynamoDB.DocumentClient();

function formatError(err) {
    console.error(err);
    return err;
}

async function getAllItems() {
    const params = {
        TableName: config.tableName,
    };
    try {
        const results = await docClient.scan(params).promise();
        return results.Items;
    }
    catch (err) {
        throw formatError(err);
    }
}

async function updateItem(item) {
    const params = {
        TableName: config.tableName,
        Item: item,
    };

    console.log(params);
    try {
        const results = await docClient.put(params).promise();
        return item;
    }
    catch (err) {
        throw formatError(err);
    }
}

async function deleteItem(id) {
    const params = {
        TableName: config.tableName,
        Key: {
            "id": id
        }
    };
    try {
        const results = await docClient.delete(params).promise();
        return { id: id };
    }
    catch (err) {
        throw formatError(err);
    }
}


module.exports = {
    getAllItems,
    updateItem,
    deleteItem,

}