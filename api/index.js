import express from'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/User.route.js';

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


app.use('/api/User',userRoutes);


