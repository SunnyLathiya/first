import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();
const PORT = 5000;

const { default: pool } = await import("./config/db.js");

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  console.log(result);
  res.send("Hello World");
});

app.use("/api", userRoutes);

app.use(errorHandler);

await createUserTable();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
