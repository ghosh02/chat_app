const { server, app } = require("./src/lib/socket");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./src/routes/auth.route");
const messageRoute = require("./src/routes/message.route");
const connectDB = require("./src/lib/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 3000;
const filePath = path.join(__dirname, "../frontend/dist");
// const __dirname = path.resolve();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use(express.static(filePath));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
