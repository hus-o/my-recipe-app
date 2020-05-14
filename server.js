const express = require('express');
const PORT = process.env.PORT  || 8080 ;
// const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));


app.use("/", function(req,res){
    res.send("hi")
})


app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});