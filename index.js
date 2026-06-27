const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine" ,  "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"views")));
app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {
        username: "ri5ing",
        content: "i love coding"
    },
    {
        username: "user1",
        content: "i am moneymagnet"
        
    },
       {
        username: "user2",
        content: "consistency"
    },
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs" , {posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let { username,content}=req.body;
    posts.push({ username , content });
    res.send("post request working");
});

app.listen(port,()=> {
    console.log("listening to port : 8080");
});

