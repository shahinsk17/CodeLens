
 require('dotenv').config()
const app=require('./src/app.js');
app.listen(5000,()=>{
    console.log("Server is Running ");
})