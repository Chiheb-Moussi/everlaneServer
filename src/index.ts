import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {db} from "./conf/db.config";
import categoryRoute from "./routes/category.route";

dotenv.config();


const app: Express = express();
// app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(categoryRoute);

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});


const port = process.env.PORT || 8000;

db.then(() => {
    app.listen(port, () => console.log('Server is listening on port '+port))
})