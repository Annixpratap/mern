import express from'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then( () => {
    console.log("MongoDb connected !...");

}).catch ( () => {
    console.log(err);
    
})

const app = express();

const PORT = 3000;

app.listen( 3000 , () => {
    console.log(`server running on port ${PORT}`);
    
});