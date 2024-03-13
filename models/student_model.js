import mongoose from "mongoose";
const StudentSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required : true
    },
   email: {
        type: String,
        required : true,
        unique: true
       
    },
   phone: {
        type: String,
        required : true
    },
    nationalId: {
        type: String,
        required : true,
        length: 16
    },
   gender: {
        type: String,
        required : true,
        enum:{
            values:['Male','Female'],
        message:'Gender must be either male or female'
    }
    }
}, {
    timestamps: true
});
const StudentModel = mongoose.model('Student', StudentSchema);
export default StudentModel;