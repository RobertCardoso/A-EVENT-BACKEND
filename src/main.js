const express = require("express");
const bodyParse = require("body-parser");
let dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8000

let app = express();
app.use(bodyParse.json())

const aeventRoutes = require("./Routes/aeventRoutes")
app.use(aeventRoutes)

app.listen(PORT, function(){
    console.log("application started on port ", PORT)
})