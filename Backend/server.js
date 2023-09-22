require('dotenv').config()

const express = require('express')
const WorkoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')

const app = express()

// MiddleWare
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})
/*
app.get('/', (req, res) =>{
    res.json({mssg: 'App Starting up!'})
})
*/
app.use('/api/workouts', WorkoutRoutes)

// Connecting to mongodb Database
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT,() =>{
            console.log('Connected to db & listening on port',process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

process.env