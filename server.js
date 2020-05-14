const express = require('express');
const PORT = process.env.PORT  || 3000 ;
// const path = require("path");
const app = express();
const recipes = require("./routes/recipeRoutes")
const cors = require('cors')

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

/* app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");

}); */

app.use("/", recipes)



app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});