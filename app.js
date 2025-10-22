require('dotenv').config();
const express = require('express');
const router = require('./Router/route.js');
const cors = require('cors');
const db_connect = require("./Utils/mongo.js");
const pool = require('./Utils/SQL.js');


db_connect();

const app = express();
  //https://screener-rust.vercel.app
const corsOption ={
    origin:"https://screener-rust.vercel.app",
    methods: "GET, PUT, PATCH, DELETE, POST, HEAD",
    credentials:true
}

async function testConnection() {
  try {
    const connection = await pool.getConnection(); // get one connection from the pool
    console.log('✅ MySQL pool connected successfully');
    connection.release(); // always release back to pool
  } catch (err) {
    console.error('❌ MySQL pool connection failed:', err.message);
  }
}

testConnection();


app.use(cors(corsOption));
app.use(express.json());
app.use("/",router);




app.listen(5000,()=>{
  console.log("Server is running");
})