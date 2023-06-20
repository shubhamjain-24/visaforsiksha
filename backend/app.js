const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: __dirname + "/.env" });
const chats = require("./data/Data");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const app = express();
const fs = require("fs");
const userRoutes = require("./newroutes/userRoutes");
const chatRoutes = require("./newroutes/chatRoutes.js");
const connectDB = require("./Connection");
const messageRoutes = require("./newroutes/messageRoutes");
connectDB();
const port = process.env.PORT || 8080;
// app.get("/", (req, res) => {
//   res.send("Api is running");
// });
// app.get('/api/chat',(req,res)=>{
//     res.send(chats);
// })

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// app.use(express.bodyParser({ limit: "50mb" }));
app.use(express.json());
app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

//--------Deployment-------------
const __dirname1 = path.resolve();
// console.log(process.env);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/build")));
  console.log("running in prod");
  // console.log(path.join(__dirname1, "/easeup/build"));

  app.use("*", express.static(path.join(__dirname1, "/build")));
  // res.sendFile(path.resolve(__dirname1, "easeup", "build", "index.html"));
} else {
  app.get("/", (req, res) => {
    res.send("API is Running successfully");
  });
}

//--------Deployment-------------

app.use(notFound);
app.use(errorHandler);

const server = app.listen(
  port,
  console.log(`server started at port http://0.0.0.0:${port}`)
);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});
io.on("connection", (socket) => {
  console.log("connected to socket io");
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    console.log(userData._id);
    socket.emit("Connected");
  });
  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User joined Room :" + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  //////////////////////////////////

  socket.on("send-pdf", (data) => {
    // Emit the PDF file to the specified chat room
    socket.to(data.room).emit("receive-pdf", {
      data: data.pdf,
      sender: socket.id,
    });
  });

  ///////////////////////////////
  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;
    if (!chat.users) return console.log("chat.users not defined");
    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;
      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

  socket.on("upload", ({ data, id }) => {
    fs.writeFile(
      "upload/" + "test.pdf",
      data,
      { encoding: "base64" },
      () => {}
    );

    // if (!chat.users) return console.log("chat.users not defined");

    // socket.in(user._id).emit("uploaded", { buffer: data.toString("base64") });

    socket.emit("uploaded", { buffer: data.toString("base64") });
    console.log(data);
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});
