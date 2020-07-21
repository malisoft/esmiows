import mongoose from "mongoose"
const __URLDB=process.env.URLDB ||"mongodb://localhost/test"
mongoose.connect(__URLDB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})
.then(db=>{console.log("Base de datos conectado.")})
.catch(err=>{console.log(err)})
