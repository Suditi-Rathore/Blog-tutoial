import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import { connectToDatabase } from "./utils/database/index.js";
import cors from "cors";
import router from "./routes/index.js";

dotenv.config();
const app = express();
connectToDatabase();
const httpServer = createServer(app);

const corsOptions = {
  origin: [""],
  credential: true,
  exposedHeaders: ["set-cookie"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/", router);

httpServer
  .listen(process.env.PORT, () => {
    console.log("Server Connected at port: ", process.env.PORT);
  })
  .on("error", (error) => {
    console.log("Error starting the server: ", error);
  });
