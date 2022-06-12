'use strict'

const{ findOneAndCreateOne } = require('../../API')

module.exports = async function (app, opts) {
    app.post('/', async function (request, reply){
        const result = await findOneAndCreateOne(this.mongo, id, body)


        reply.code(201).send({"id":result.insertedId})    
})}