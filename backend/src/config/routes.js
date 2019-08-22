const express = require('express')

module.exports = function(server) {

    // Definir URL base para todas as rotas 
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Mensalidades
    const Mensalidades = require('../api/mensalidades/mensalidades')
    Mensalidades.register(router, '/mensalidades')

}