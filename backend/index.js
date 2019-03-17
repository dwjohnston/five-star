const express = require('express');
const AWS = require("aws-sdk");
const uuid = require('uuid/v1');

const app = express();
const port = 3001 || process.env.port;

const config = require("./dynamodb/config");
const dbApi = require("./dynamodb/interactWithTable");

const dynamodb = new AWS.DynamoDB(config.dynamoOptions);



app.get('/products', async (req, res) => {
    try {
        console.log("try");
        const result = await dbApi.getAllItems();

        console.log(result);
        res.send(result);
    } catch (err) {
        console.log(err);

        res.status(500).send(err);
    }
});

app.post('/products', (req, res) => {
    try {
        console.log(req);
        console.log(uuid());
        const result = dbApi.getAllItems();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.patch('/products/:id', (req, res) => {
    try {
        const result = dbApi.getAllItems();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))