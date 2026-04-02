const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const cookieparser = require("cookie-parser");
const app = express();
const jwt = require("jsonwebtoken");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const Post = require("./models/Post");
const secret = "ihdb34cdhg34cbdhdbh";

//const salt='234fhddhdiskdjh';
//app.use(cors({credentials: 'include',origin:'http://localhost:3000/'}));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
// app

app.use(cookieparser());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://blog_db_user:F6GqPxnl7W0QDlmu@cluster0.hv1yamr.mongodb.net/blog?appName=Cluster0"
);

app.post("/register", async (req, res) => {
  console.log("Requête reçue !"); // debug : la route est-elle appelée ?
  // console.log('req.body: ', req.body);
  const { username, password } = req.body;
  console.log("req.body: ", req.body);
  try {
    const salt = bcrypt.genSaltSync(10);
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    // const userDoc= await User.create({username,password});
    res.json(userDoc);
    // res.json(userDoc);
  } catch (e) {
    console.log("error ", e);
    res.status(400).json(e);
  }

  //res.json({ message: 'test', data: req.body });
});
//F6GqPxnl7W0QDlmu
//mongodb+srv://blog_db_user:F6GqPxnl7W0QDlmu@cluster0.hv1yamr.mongodb.net/?appName=Cluster0

app.post("/login", async (req, res) => {
  console.log("request recu");
  const { username, password } = req.body;
  console.log("request recu", req.body);
  console.log("request recu", username);

  const userDoc = await User.findOne({ username });
  console.log("userdoc  ", userDoc);
  const passOk = bcrypt.compareSync(password, userDoc.password);
  console.log("pass ok", passOk);
  // res.json(userDoc);
  if (passOk) {
    //loging
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      //res.json(req.cookies);
      res.cookie("token", token).json({ id: userDoc._id, username });
    });
  } else res.status(400).json("wrong credentiel");
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.json(null); // ou res.status(401).json({ message: "Not logged in" })
  }
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
    console.log("info   ", info);
  });
  //res.json(req.cookies);
});
app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

// app.post("/post",upload.single('file'),(req,res)=>{
//    // const { title, summary, content } = req.body;
//     res.json({files:req.file});
//     console.log('infojj   ',req.file)

//})
app.post("/post", upload.single("image"), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;

  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });
    res.json(postDoc);
    console.log("info   ", postDoc);
  });
});

app.get("/post", async (req, res) => {
  //const posts = await Post.find().populate("author"["username"]);
  const posts = await Post.find().populate("author", ["username"]);
  res.json(posts);
});

// app.post('/post', upload.single('file'), (req, res) => {
//     const { title, summary, content } = req.body;
//     const file = req.file;

//     console.log('TITLE:', title);
//     console.log('SUMMARY:', summary);
//     console.log('CONTENT:', content);
//     console.log('FILE:', file);

//     res.json({
//       title,
//       summary,
//       content,
//       file
//     });
//   });

app.listen(4000, () => {
  console.log("✅ Server running on http://localhost:4000");
});
