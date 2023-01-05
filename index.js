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

mongoose.connect(MONGODB_URI || 'mongodb+srv://ZirrKing:65937675299041230290728123677583@cluster0.5r4pdz7.mongodb.net/wediary?retryWrites=true&w=majority')

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
} else app.get('/', (req, res) => {
    res.send('api running')
})

app.post('/postInquiry', async (req, res) => {
    const inquiry = req.body
    const createInquiry = new InquiryModel(inquiry)
    await createInquiry.save()
    res.json(createInquiry)
})

const PORT = process.env.PORT
app.listen(PORT || 3001, () => {
    console.log(process.env.NODE_ENV)
    console.log(PORT)
    if (PORT) {
        console.log(`Server Running on port ${PORT}`)
    } else {
        console.log('Server Running on port 3001')
    }
})