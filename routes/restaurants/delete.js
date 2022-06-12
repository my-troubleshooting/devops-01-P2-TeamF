'use strict'

const { menudeleteOne } = require('../../API')

module.exports = async function (app, opts) {
    app.delete('/menu/:id', async function (request, reply){
        const result = await menudeleteOne(this.mongo, request.params.id)
        
        reply
        .code(204)
        .header('Content-type', 'application/json')
        .send({"value":null, "ok":{}})
    })
}