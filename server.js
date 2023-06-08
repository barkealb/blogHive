const express = require('express')
const app = express()
require('dotenv').config()
const Morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')

/*CONFIGURATION*/

app.use(express.json())
app.use(Morgan('dev'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))

/*ROUTES*/

app.use('/auth', require("./routes/authRouter"));
app.use("/api/blogs", require("./routes/blogRouter"));
app.use("/api/comments", require("./routes/commentRouter"));


/*Database*/

mongoose.connect('mongodb+srv://barkeal:cwaRFV9dA5iev62H@cluster0.uwng6zw.mongodb.net/?retryWrites=true&w=majority', 
console.log('Connected to DB'));

/*Error Handler*/

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === 'UnauthorizedError') return res.status(err.status)
    return res.send({errMsg: err.message})
})


//Listen on port 9000
app.listen(9000, () => {
    console.log('Server started on port 9000')
})



