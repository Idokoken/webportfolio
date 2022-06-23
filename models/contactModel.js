const mongoose = require("mongoose")
const {Schema} = mongoose

const contactModel = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	description: {type: String, required: true},
}, {timestamp: true})

module.exports = mongoose.model('Contact', contactModel)