
import dotenv from "dotenv";
dotenv.config()
import express from "express";
import mongoose from "mongoose";
import StudentModel from "./models/student_model.js";
import FacilitatorModel from "./models/facili_models.js";

const app = express()
const port= process.env.PORT || 3000;
app.use(express.json())
//Post
app.post('/student/add',async(req,res)=>{
    try {
        const addedStudent = await StudentModel.create(req.body);
res.status(201).json({
     message:"Student added",
    student: addedStudent
});
    } catch (err) {
        console.log(err.message);
        res.status(500).json({
            message: "Error in adding student"
        });
    }
});
//Update
app.patch('/student/update/:id', async(req,res)=> {
  try {
        const {fullname, email} = req.body;
        const updateStudent = await StudentModel.findByIdAndUpdate(
            {_id: req.params.id},
        {$set: {fullname, email}},
        {new: true}
        );
        res.status(200).json({
            message: "Student updated",
            student: updateStudent
        });
    } catch (error) {
        res.status(500).json({
            message:"Error in updating student"
        });
    }
});




 //get by id
 
 app.get('/student/get/:id', async (req, res) => {
        try{
    const getStudents = await StudentModel.findById(
        {_id: req.params.id}
        );
    res.status(200).json({
        student: getStudents
    })
}
 catch(error) {

    console.error(error.message);
    res.status(500).json({
        
        message: "Error getting id students",
         
    });
}
});

//find by email
app.get('/student/email/:email',async(req,res)=>{
    try {
        const getByEmail = await StudentModel.findOne(
            {email: req.params.email}
            );
            res.status(200).json({
                student: getByEmail
            });
    } catch (error) {
        res.status(500).json({
            message:"Error in getting by email"
        });
    }
});

//delete
app.delete('/student/delete/:id',async (req,res)=>{
   try {
    const deleteById = await StudentModel.deleteOne(
        {_id: req.params.id}
    );
    res.status(200).json({
        message: "Student deleted",
        student: deleteById
    });
}
    catch (error) {
    res.status(500).json({
        message: "Data not deleted"
    });
    }
});


//Facilitator code
app.post('/facilitator/post', async(req,res)=>{
    try {
         const addFacilitator = await FacilitatorModel.create(req.body);
    res.status(200).json({
        message:"Facilitator Added",
        facilitator: addFacilitator
    });
} catch (error) {
        res.status(500).json({
            message:"Error in adding Facilitator"
        });
}
});

//get facilitator by id
 app.get('/facilitator/get/:id', async(req,res)=>{
    try {
        const FacilitatorById = await FacilitatorModel.findById({_id: req.params.id})
        
            res.status(200).json({
               
                facilitator:FacilitatorById
            });

    } catch (error) {
        res.status(500).json({
            message:"Error in getting facilitator"
        });
    }
 });
 
 // get by email
 app.get('/facilitator/emails/:email', async(req,res)=>{
    try {
        const FacilitatorByEmail = await FacilitatorModel.findOne({email: req.params.email})
        res.status(200).json({
            facilitator: FacilitatorByEmail
        })
    } catch (error) {
        res.status(500).json({
            message:"Error in getting facilitator by email"
        });
    }
 });

 //update
 app.patch('/facilitator/update/:id',async(req,res)=>{
    try {
        const { fullname, email, phone, nationalId, course, role} = req.body
        const FacilitatorUpdate = await FacilitatorModel.findByIdAndUpdate(
            {_id: req.params.id},
            {$set:{fullname, email, phone, nationalId, course, role}},
            {new: true});
            res.status(200).json({
                message:"Updated Successfully",
                facilitator: FacilitatorUpdate
            });
    } catch (error) {
        res.status(500).json({
            message:"Error in updating facilitator"
        });
    }
 });
 
 //delete
 app.delete('/facilitator/delete/:id', async(req,res)=>{
    try {
        const deleteFacilitator = await FacilitatorModel.deleteOne(
            {_id: req.params.id})
            res.status(200).json({
                message:"Dleted successufully",
                facilitator: deleteFacilitator
            });
    } catch (error) {
        res.status(500).json({
            message:" Error in deleting"
        })
    }
 })
 app.listen(port,()=>{
console.log(`Server is listening on port ${port}`)
  })
  const dbconnection = process.env.MONGODB_URL;
  
  mongoose.connect(dbconnection)
  .then(()=>{
console.log("Connected to DB...")
  })
  .catch((err)=>{
console.log(err)
  })