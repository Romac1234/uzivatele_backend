const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hlavni strana");
});

const userRouter = require("./routes/users"); // konstanta a odkud to importuju (ze server)
app.use("/users", userRouter); // hromadna adresa, konstanta z minuleho radku

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
