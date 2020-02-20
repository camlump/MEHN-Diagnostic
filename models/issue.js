const mongoose = require('../db/connection')

const Schema = mongoose.Schema


const issueSchema  = new Schema({

    description: String,

    createdAt: Date,

    status: String,

    priority: String
})

module.exports = mongoose.model('issueSchema', issueSchema)