import express from "express";
import cors from "cors";
import router from "./routes/routeMiembro";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan());
app.use(express.json());
app.use(router);

export default app;
