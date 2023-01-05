const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
const InquiryModel = require('./models/InquiryModel')
const path = require('path')
require('dotenv').config()

mongoose.connect('mongodb+srv://ZirrKing:65937675299041230290728123677583@cluster0.5r4pdz7.mongodb.net/wediary?retryWrites=true&w=majority')

app.post('/postInquiry', async (req, res) => {
    const inquiry = req.body
    const createInquiry = new InquiryModel(inquiry)
    await createInquiry.save()
    res.json(createInquiry)
})

app.listen(3001, () => {
    console.log('Server Running on Port 3001')
})