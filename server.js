const express = require('express');
const PORT = process.env.PORT  || 3000 ;
// const path = require("path");
const app = express();
const recipes = require("./routes/recipeRoutes")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  next();
});

app.use("/", recipes)



app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});