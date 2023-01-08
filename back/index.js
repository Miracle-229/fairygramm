const express=require("express");
const mongoose=require("mongoose");
const config=require("config");
const authRouter=require("./routes/auto.routes")
const app=express();
const PORT=config.get("serverPort")

app.use(express.json())
app.use("/api/auth",authRouter)

const start= async ()=>{
    try {
       await mongoose.connect(config.get("dbURl"))
    app.listen(PORT,()=>{
        console.log(`Port started in `,PORT)
    })
    } catch (error) {
        
    }
}

start()
