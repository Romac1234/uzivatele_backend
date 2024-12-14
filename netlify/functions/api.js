import express, { Router } from "express";
import serverless from "serverless-http";
const router = express.Router();

// const cors = require("cors");
// app.use(cors());

import cors from "cors";

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const app = express();
app.use(express.json());

router.get("/", (req, res) => {
  res.json("hlavni strana");
});

const userRouter = require("./routes/users"); // konstanta a odkud to importuju (ze server)
router.use("/users", userRouter); // app or router?? hromadna adresa, konstanta z minuleho radku

// app.listen(3001, () => {
//   console.log("Server running on port 3001");
// });

app.use("/api", router);
export const handler = serverless(app);
