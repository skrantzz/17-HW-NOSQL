const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
const htmlRoutes = require('./routes/html-routes')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_tjvdq11f:ipgkdrecslsu4mhkkfvp3e7it4@ds117719.mlab.com:17719/heroku_tjvdq11f, {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes.js"));
app.use(htmlRoutes)
// app.get("/stats", (req,res)=>{
//     res.sendFile(path.join(__dirname, "./public/stats.html"));
//   })
  
//   app.get("/exercise", (req,res)=>{
//     res.sendFile(path.join(__dirname, "./public/exercise.html"));
//   })
  

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// routes
    // GET route to get last workout /api/workouts/
    // PUT route to add exercise to existing workouts /api/workouts/
    // POST route to create workout /api/workouts/
    // GET? route for /api/workouts/range

// 


