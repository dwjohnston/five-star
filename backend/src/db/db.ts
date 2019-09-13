import { MongoClient, Db } from "mongodb";
import { Rating, Content } from "common";

const { DB_URL, DB_USERNAME, DB_PASSWORD } = process.env;

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}`;
export async function getDb() {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('mydb');
    return db;
}

export async function getAllContent(db: Db): Promise<Content[]> {
    try {
        return db.collection("ratings").find().toArray();
    }
    catch(err){
        //@DesignNote - Error Handling
        //Catch and transform errors on the framework boundaries. 
        //ie. Here is where we would catch mongoDB errors, and 
        //Transform them into some errors specific to our application. 

        throw err; 
    }
}

export async function postRating(db: Db, contentId: number, rating: Rating) : Promise<Rating> {
    //Todo: update this query so that it replaces the rating where the userId is the same. 
    try {
        db.collection("ratings").updateOne({
            contentId: {
                $eq: contentId
            }
        }, {
            $push: { ratings: rating }
        });

        return rating; 
    }catch(err) {
        throw err; 
    }
}

