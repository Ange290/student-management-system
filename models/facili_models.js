import mongoose from "mongoose";
const  facilitatorSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required : true
    },
    nationalId: {
        type: String,
        required : true,
        length: 16
    },
   course: [{
        type: String,
        required : true
   }]
    ,
    role:{
        type: String,
         required: true,
         enum:{
          values:["Technical Facilitator","Assistant Technical Facilitator"]
         }
    }
}, {
    timestamps: true
});
const FacilitatorModel = mongoose.model('facilitator', facilitatorSchema);
export default FacilitatorModel;
