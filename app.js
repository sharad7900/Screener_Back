const express = require('express');
const router = require('./Router/route.js');
const cors = require('cors');




const app = express();
app.use(express.json());
const corsOption ={
    origin:"https://screener-rust.vercel.app/",
    methods: "GET, PUT, PATCH, DELETE, POST, HEAD",
    credentials:true
}
app.use(cors(corsOption));
app.use("/",router);




app.listen(5000,()=>{
  console.log("Server is running");
})