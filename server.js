const express = require("express")

const Pizza = require('./models/pizzaModel')

const db = require('./db')
const app = express();
//comment
app.use(express.json())

const path = require('path')
const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require("./routes/userRoute")
const loginRoute = require("./routes/loginRoute")
const orderRoute = require('./routes/ordersRoute')

if(process.env.NODE_ENV === `production`){
    app.use(`/` , express.static(`client/build`))
    app.get(`*` , (req , res) => {
        res.sendFile(path.resolve(__dirname , `client/build/index.html`))
    })
}

app.use('/api/pizzas/', pizzasRoute)
app.use("/api/users/" , userRoute)
app.use('/api/user/',loginRoute)
app.use('/api/orders/', orderRoute)

// app.get("/", (req,res) => {
//     res.send("server working")
// });

app.get("/getpizzas" ,(req,res) => {
Pizza.find({} , (err,docs) => {
    if(err){
        console.log(err)
    }else {
        res.send(docs)
    }
})

})

const port = process.env.PORT || 5000

app.listen(port, () => "server is running on port port")