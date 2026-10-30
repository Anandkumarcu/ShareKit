import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
mongoose.connect(process.env.DB_URL)

import express from 'express'
const app = express()
app.listen(process.env.PORT)

app.use(express.static('view'))