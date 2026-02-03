import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

// Set port
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// Routes
app.use("/api/v1/users", userRoutes);

const start = async () => {
    try {
        // Check if MONGO_URI exists
        if (!process.env.MONGO_URI) {
            console.error("MONGO_URI is not defined in .env file");
            process.exit(1);
        }
        
        // Connect to MongoDB
        const connectionDb = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected. Host: ${connectionDb.connection.host}`);
        
        // Start server
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};

start();