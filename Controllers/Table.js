const MF_MAP = require("../MF_MAP.json");
const fs = require('fs');



const table_data = async (req,res)=>{

    const data = req.body;
    var newData = {};
    const current_Time = new Date();
    const prev_date = new Date(MF_MAP.time);
    const diff = (current_Time-prev_date)/(1000 * 60 * 60);
    console.log(data);

    if(diff>=24){

        for(code in data){
            

            const response = await fetch(`https://dotnet.ngenmarkets.com/ngenindia.asmx/ReturnSQLResult?sql=exec%20c_getSchemeNavJSON%${code}`).then((res) => res.json());
            newData[code] = response?.[response.length-1]?.nav || "N/A";
        }
        const current_date = new Date();
        const m = current_date.getMonth();
        const d = current_date.getDate();
        const y = current_date.getFullYear();
        newData['time'] = new Date(y,m,d,9,30,0);
        fs.writeFileSync('MF_MAP.json', JSON.stringify(newData, null, 2));
        return res.status(200).json(newData);
  

    }
    else{
       for(code in data){
        if(MF_MAP[code]){
            console.log(MF_MAP[code]);
            newData[code]=MF_MAP[code];
        }
        else{
            const response = await fetch(`https://dotnet.ngenmarkets.com/ngenindia.asmx/ReturnSQLResult?sql=exec%20c_getSchemeNavJSON%${code}`).then((res) => res.json());
            newData[code] = response?.[response.length-1]?.nav || "N/A";
        }
        
       }
       console.log(newData);
        fs.writeFileSync('MF_MAP.json', JSON.stringify(newData, null, 2));
        return res.status(200).json(newData);


       
    }

    
    
//    const response = await fetch(`https://dotnet.ngenmarkets.com/ngenindia.asmx/ReturnSQLResult?sql=exec%20c_getSchemeNavJSON%${key}`).then((res) => res.json());
    return_data = {};
    // console.log(MF_MAP.time);

    return res.status(200).json(MF_MAP);

}


module.exports = {table_data}; 