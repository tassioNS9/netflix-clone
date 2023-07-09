const { application } = require("express")
const express = require("express")
const port = 3333;
const path = require("path")

let initialPath = path.join(__dirname, "public")

let app = express()

app.use(express.static(initialPath))

app.get("/", (req,res)=>{
    res.sendfFile(path.join(initialPath, "index.html"))
} )

app.listen(port, ()=>{
    console.log(`server start up ${port}!`)
})