const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { readdirSync } = require('fs')

var MONGO_URL = "mongodb+srv://rohith:rohith06@cluster0.d3ltm.mongodb.net/Avg_Score?retryWrites=true&w=majority"

// var mongourl = `mongodb://localhost:27017`

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("api hitting")
})

mongoose.connect(MONGO_URL, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, (err, res)=>{
    if (err) console.log("mongo err", err)
    console.log("db connected")
})

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));



const port = 2211
app.listen(port, (err, res)=>{
    if (err) console.log(err)
    console.log(`server running on ${port}`)
})
