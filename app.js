import express from "express"
const app = express();
import './connection/connection.js'
import auth from "./routes/auth.js"

app.use(express.json());

app.get("/" ,(req,res)=>{
    res.send("hello");
})

app.use("/api/v1",auth);

app.listen(1000, ()=>{
    console.log("server started");
})

