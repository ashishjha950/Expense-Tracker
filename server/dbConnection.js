import mongoose from "mongoose";

const Connection = async () => {
    try {
        const mongoUrl = process.env.MONGO_URL;
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

export default Connection;