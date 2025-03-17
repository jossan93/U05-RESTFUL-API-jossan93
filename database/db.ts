import mongoose from "mongoose";

async function connectDB() {
    try {
        const URL = process.env.MONGO_URL || "";
        await mongoose.connect(URL);
        console.log("DB connected succesfully");
    } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("error when connecting to DB: ${error.message()}")  
        }
        
    }
}

export default connectDB;