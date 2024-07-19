const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

const productRoute=require("./routes/productRoute");
const userRoute=require("./routes/userRoute");
const allRoute=require("./routes/allRoutes");
const loginRoute=require("./routes/loginRoute");
const detailRoute=require("./routes/detailsRoute");
const personalRoute=require("./routes/personalRoutes");
const passwordRoute=require("./routes/passwordRoutes");

connection()
app.use(express.json());
app.use(cors());
app.use("/api", productRoute);
app.use("/api", userRoute);
app.use("/api", allRoute);
app.use("/api", loginRoute);
app.use("/api", detailRoute);
app.use("/api", personalRoute);
app.use("/api", passwordRoute);
const port =  8080;
app.listen(port, console.log(`Listening on port ${port}...`));