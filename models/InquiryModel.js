const mongoose = require('mongoose')

const InquirySchema = mongoose.Schema({
    name: {
        type: String
    },
    inquiry: {
        type: String
    }
})

const newInquiry = mongoose.model('users', InquirySchema)

module.exports = newInquiry