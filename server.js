import express from "express";
import colors from "colors"; // type mode means es 6, and tema import karvanu require nai
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoute.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url"; // Import necessary modules

//config env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

// Define __dirname for ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middelwares
// json no use karva
app.use(cors());
app.use(express.json()); //pela body parser use karta but have express ma aa feature aave j che
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes); // aakhi app ma have authRoutes and categoryRoutes game tyathi use kari shakie
app.use("/api/v1/product", productRoutes);

// static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Online Vegitable App</h1>");
});

//PORT
// PORT ne secure rakhva dotenv use kari and process.env pachi .env ma je variable ma port number nakhyo e
// || means defult 8080 jo env na port ma kai problem aave

const PORT = process.env.PORT || 8080; // You can replace 5000 with your preferred port number


//run listen
app.listen(PORT, () => {
  console.log(
    `server Running on-mode ${process.env.DEV_MODE} ${PORT}`.bgCyan.white
  );
});
