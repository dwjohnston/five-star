#!/usr/bin/env bash 
docker run -d -p 8000:8000 amazon/dynamodb-local 
cd backend
npm install 
npm run create-db
npm run load-data
node index.js 
