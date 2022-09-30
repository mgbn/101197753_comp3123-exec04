const express = require("express")

const SERVER_PORT = 8088

const app = express()

app.get("/hello", (req, res)=>{

    res.send("<h1>Hello Express JS<h1>")
})


//http://localhost:8088/user?firstname=mustafa&lastname=izci   
app.get("/user", (req, res)=>{
   
    res.send(JSON.stringify(req.query))
})

//http://localhost:8088/user/mustafa/izci   path parameter
app.post("/user/:firstName/:lastName", (req, res)=>{
    const s = req.params
    var first_name = req.params.firstName
    var last_name = req.params.lastName
const info = {
    first_name,
    last_name,
}
    res.json(info)
    
})
app.listen(SERVER_PORT, ()=>{
    console.log(`Server Started at http://localhost:${SERVER_PORT}`)
})

