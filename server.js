const express = require('express');
const PORT = process.env.PORT  || 3000 ;
// const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:', '*');
  next();
});

app.use("/", function(req,res){
    res.send("hi")
})

app.get("/test", function(req,res){
  res.json({name:"john",age:23})
})


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});