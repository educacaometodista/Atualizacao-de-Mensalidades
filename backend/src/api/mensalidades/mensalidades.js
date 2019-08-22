const Mensalidades = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

Mensalidades.methods(['get', 'post', 'put', 'delete'])
Mensalidades.updateOptions({new: true, runValidators: true})
Mensalidades.after('post', errorHandler).after('put', errorHandler)

Mensalidades.route('count', (req, res, next) => {
    Mensalidades.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

Mensalidades.route('summary', (req, res, next) => {
    Mensalidades.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = Mensalidades