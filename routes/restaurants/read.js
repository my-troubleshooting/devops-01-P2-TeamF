'use strict'

const { readAll } = require('../../API')

module.exports = async function (app, opts) {
    app.get('/', async function (request, reply){
        const result = await readAll(this.mongo)
        console.log(result)
        reply.code(200).send(result)
    })
}
