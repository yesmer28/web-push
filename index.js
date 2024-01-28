const express = require("express");
const router = require("./routes/router");
const app = express()

app.use(express.static("./public"))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router)
app.listen(3002,()=> console.log('Server...'));