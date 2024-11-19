import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://therambhatt:Project-MERN@cluster0.mctye.mongodb.net/food-delivery').then(()=>console.log("DB Connected"))
}
