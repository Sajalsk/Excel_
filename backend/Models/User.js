import mongoose from "mongoose";

var userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
     
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: Number,
      required: true,
    },

    DOB: {
      type: Number,
    },

    Expereince: {
      type: String,
    
    },
    Resume: {
        type: String,
       
      },
      Location: {
        type: String,
        
      },
      Postal: {
        type: String,
       
      },

      CurrentEmployer: {
        type: String,
       
      },

      CurrentDesignation: {
        type: String,
      
      },
  },
  
);

export default mongoose.model("User", userSchema);
