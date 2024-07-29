import mongoose from "mongoose";
// connecting to our database to be able to use our save dinfo across the frontend and backend
const connecttoMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);  // Connect to the MongoDB database using the URI stored in the environment variable MONGO_DB_URI       
        console.log("Connected to MongoDB") // success
    } catch (error) {
        console.log("Error connecting to MongoDB,error.message") // failed
    }
}
 // export the function to be used across the app
export default connecttoMongoDB;