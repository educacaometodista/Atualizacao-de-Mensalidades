const restful = require('node-restful')
const mongoose = restful.mongoose

const mensalidadesSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    valor: { type: Number, required: true },
    curso: { type: String, required: true },
})

module.exports = restful.model('Mensalidades', mensalidadesSchema)