import mongoose from "mongoose"

const userSchema = new mongoose.Schema({})

export const User = mongoose.model("User", userSchema({
  // username: String,
  // email: String,
  // isActive: Boolean
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true}
)

// in DB string "User" is stored as "users"

