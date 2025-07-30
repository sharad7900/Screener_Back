const express = require('express');
const router = require('./Router/route.js');



const app = express();
app.use(express.json());


app.use("/",router);


app.listen(5000,()=>{
  console.log("Server is running");
})