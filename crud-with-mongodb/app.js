const cors = require('cors'); 
const express = require("express");
const blogRouter = require("./routes/BlogRoutes");
const app = express();app.use(cors());

const mongoose = require("mongoose");

mongoose
	.connect(
	'mongodb://demo:demo@db:27017/posts',
	 { useNewUrlParser: true}
	 )
	 .then(() => console.log('MongoDB Connected'))
	 .catch(err => console.log(err));


//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);



app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;
