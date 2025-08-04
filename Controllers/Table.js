const { mongo } = require("mongoose");
const NAV_Data = require("../Model/model.js");
const { error } = require("console");





const table_data = async (req, res) => {

    try{

        const data = req.body;
        const mongolist = await NAV_Data.findById('688a09ebbe9984320e246e15');
        // console.log(Object.entries(mongolist));
        // console.log(mongolist.toObject());
        
        
        
        var newData = {};
        
        const current_Time = new Date();
        const prev_date = new Date(mongolist.toObject()['time']);
        const diff = (current_Time - prev_date) / (1000 * 60 * 60);
        // console.log(diff);
        
        if (diff >= 24) {
            
            
            for (code in data) {
                
                try {
                    const response = await fetch(`https://dotnet.ngenmarkets.com/ngenindia.asmx/ReturnSQLResult?sql=exec%20c_getSchemeNavJSON%${code}`).then((res) => res.json());
                    newData[code] = response?.[response.length - 1]?.nav || "N/A";
                }
                catch (e) {
                    return res.status(400).send(error);
                }
                
            }
            const current_date = new Date();
            const m = current_date.getMonth();
            const d = current_date.getDate();
            const y = current_date.getFullYear();
            newData['time'] = new Date(y, m, d, 3, 30, 0);
            const doc = await NAV_Data.findByIdAndUpdate(
                '688a09ebbe9984320e246e15',newData,
                {new: true,
                    overwrite: true,
                });
                
                return res.status(200).json(newData);
                
                
            }
            else {
                try {
                    for (let code in data) {
                        // console.log(code);
                        if (mongolist.toObject()[code]) {
                            newData[code] = mongolist.toObject()[code];
                        }
                        else {
                            const response = await fetch(`https://dotnet.ngenmarkets.com/ngenindia.asmx/ReturnSQLResult?sql=exec%20c_getSchemeNavJSON%${code}`).then((res) => res.json());
                            newData[code] = response?.[response.length - 1]?.nav || "N/A";
                            
                        }
                        
                    }
              
                    try {
                        const doc = await NAV_Data.findByIdAndUpdate(
                            '688a09ebbe9984320e246e15',newData,
                            {new: true,
                                overwrite: true,
                            });
                            
                            
                        }
                        catch (e) {
                            console.log(e);
                        }
                        
                        
                        return res.status(200).json(newData);
                        
                    }
                    catch (e) {
                        return res.status(400).json(e);
                    }
                    
                    
                    
                    
                }
            }
            catch(e){
                return res.status(500).json(e);
            }
                



}


module.exports = { table_data }; 