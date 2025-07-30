const mongoose = require('mongoose');

const db_connect = async()=>{

    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected");
    }
    catch(e)
    {
        console.log(e);
    }
}

module.exports = db_connect;