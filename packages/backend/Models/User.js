import mongoose from "mongoose";

var userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required :true
  },
  Email: {
    type: String,
  
    
  },

  Mobile: {
    type: Number,
  },

  DOB: {
    type: Date,
  },

  Experience: { 
    type : String,
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
});

export default mongoose.model("User", userSchema);
