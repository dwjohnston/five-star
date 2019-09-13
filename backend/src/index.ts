require("dotenv").config();
import { getDb, getAllContent, postRating } from "./db/db";
import express from "express";
import bodyParser from "body-parser"; 
import {averageContentRating} from "./util/averageContentRating";
import { createRating, Rating } from "common";
import { runInNewContext } from "vm";
const port = process.env.PORT || 3001; // default port to listen

class BadRequestError extends Error {
}


//@DesignNote - We can test this function fairly easily by 
// Mocking the objects/functions that go into it and testing assertions against. 
// The router methods can be similarly tested by pulling them out 
// Into exported functions like this. 
export function errorHandler(err, req, res, next) {
    if (err instanceof BadRequestError) {
        res.status(400).end();
    }        
    res.status(500).end(); 
}

async function initApp() {
    try {
        const db = await getDb();

        const app = express();
        app.use(bodyParser.json()); 


        app.get("/content", async (req, res, next) => {
            try {
                const content = await getAllContent(db); 
                const contentSummarys =  content.map(v => averageContentRating(v));
                res.status(200).send(contentSummarys);
            } catch(err) {
                next(err); 
            }
        }); 

        app.post("/content/:id/rating", async (req, res, next) => {
            try {
                let id :number, rating : Rating; 
                try {
                    id = Number.parseInt(req.params.id); 
                    //@DesignNote - See the note about error handling type interfaces
                    rating = createRating(req.body); 
                } catch(err) {
                    throw new BadRequestError(); 
                }
                
                const ratingData = await postRating(db, id, rating); 
                res.send(ratingData);
            } catch(err) {
                next(err); 
            }
        }); 

        //@DesignNote - Express error handler
        //We allow our express routers to just throw errors, and we'll handle them here
        //To apply status codes etc. 
        //We could also add error loggers etc, in their own handlers. 
        //See https://expressjs.com/en/guide/error-handling.html
        app.use(errorHandler);
        
        // start the Express server
        app.listen(port, () => {
            console.log(`server started at http://localhost:${port}`);
        });



    }
    catch  (err) {
        console.error("Something went wrong instantiating app"); 
        console.error(err); 
        process.exit(1); 
    }
}


initApp();


