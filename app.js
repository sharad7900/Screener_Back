require('dotenv').config();
const express = require('express');
const router = require('./Router/route.js');
const cors = require('cors');
const db_connect = require("./Utils/mongo.js")


db_connect();

const app = express();
  //https://screener-rust.vercel.app
const corsOption ={
    origin:"https://screener-rust.vercel.app",
    methods: "GET, PUT, PATCH, DELETE, POST, HEAD",
    credentials:true
}

app.use(cors(corsOption));
app.use(express.json());
app.use("/",router);




app.listen(5000,()=>{
  console.log("Server is running");
})