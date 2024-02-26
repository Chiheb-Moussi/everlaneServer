import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config();


const connectionString = process.env.MONGO_DB_URL as string;
export const db = mongoose.connect(connectionString)
    .then(res => {
        if(res){
            console.log(`Database connection succeffully`)
        }

    }).catch(err => {
        console.log(err)
    })
