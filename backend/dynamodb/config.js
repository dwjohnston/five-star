const dynamoOptions = {
    region: "eu-west-2",
    endpoint: "http://localhost:8000",
    accessKeyId: "",
    secretAccessKey: "",
    credentials: {
        accessKeyId: 'akid',
        secretAccessKey: 'secret',
        sessionToken: 'session'
    }
}

const tableName = "Products";

module.exports = {
    dynamoOptions,
    tableName
}