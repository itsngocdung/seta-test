import express from "express";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 8080;

app.use(express.json());
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
