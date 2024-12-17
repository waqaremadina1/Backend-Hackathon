const express = require("express");
require("./connection/connection");
require('dotenv').config();
const cors = require("cors")
const path = require("path");
const cookieParser = require("cookie-parser") 
const auth = require("./Routes/authenticate");
const product = require("./Routes/product");
const order = require("./Routes/order");
const app = express();


app.use(cookieParser())
app.use(express.json());
app.use(cors())
const PORT = process.env.PORT

// app.get("/", (req, res) => {
//   app.use(express.static(path.resolve(__dirname, "Frontend", "build")));
//   res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"));
//   });
 
app.use("/api/v1", auth);
app.use("/api/v2", product);
app.use("/api/v3", order);

app.listen(PORT, () => {
  console.log(`Server Started at port : ${PORT}`);
});
