const restful = require('node-restful')
const mongoose = restful.mongoose

const clientsSchema = new mongoose.Schema({
    courseIe: { type: String, required: true },
    courseIdentity: { type: String, required: true },
    courseName: { type: String, required: true },
    courseModality: { type: String, required: true },
    coursePrice: { type: Number, required: true }
})

module.exports = restful.model('Clients', clientsSchema)