require("dotenv").config();
import { getDb, getAllContent, postRating } from "./db/db";
import express from "express";
import bodyParser from "body-parser"; 
import {averageContentRating} from "./util/averageContentRating";
const port = process.env.PORT || 3001; // default port to listen

async function initApp() {
    try {
        const db = await getDb();

        const app = express();
        app.use(bodyParser.json()); 

        app.get("/content", async (req, res) => {
            const content = await getAllContent(db); 
            const contentSummarys =  content.map(v => averageContentRating(v));
            res.status(200).send(contentSummarys);

        }); 

        app.post("/content/:id/rating", async (req, res) => {
            const id = Number.parseInt(req.params.id); 
            const rating = req.body; 
            const ratingData = await postRating(db, id, rating); 
            res.send(rating);
        }); 
    
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


