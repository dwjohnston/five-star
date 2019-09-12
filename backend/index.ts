const express = require('express');
const AWS = require("aws-sdk");
const uuid = require('uuid/v1');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
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

app.post('/products', async (req, res) => {
    try {
        const result = await dbApi.updateItem({
            ...req.body,
            id: uuid()
        });
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.patch('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await dbApi.updateItem({
            ...req.body,
            id: uuid()
        });
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await dbApi.deleteItem(id);
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))