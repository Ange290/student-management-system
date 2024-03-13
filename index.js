
import dotenv from "dotenv";
dotenv.config()
import express from "express";
import mongoose from "mongoose";
const app = express()

const port= process.env.PORT || 3000;
 app.listen(port,()=>{
console.log(`Server is listening on port ${port}`)
  })
  const dbconnection = process.env.MONGODB_URL;
  app.use(express.json())
  mongoose.connect(dbconnection)
  .then(()=>{
console.log("Connected to DB...")
  })
  .catch((err)=>{
console.log(err)
  })