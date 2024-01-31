const express = require('express');
const app = express();
port = 3000;
app.use(express.json())
app.use(express.urlencoded())


app.listen(port,() => {console.log(`serverb listening on ${port}`)})


abc = [
    {
        saman: "ghee",
        daam: "250g"
    },
    {
        saman: "tel",
        daam: "250g"
    },
    {
        saman: "haldi",
        daam: "250g"
    },
    {
        saman: "masala",
        daam: "250g"
    },
]

app.get("/" , (req , res) =>{
    res.send(abc)
})
app.post("/" , (req , res) =>{
    console.log(req.body)
})


