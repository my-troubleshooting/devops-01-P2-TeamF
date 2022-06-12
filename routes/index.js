'use strict'

const { readOne, findOneAndUpdateOne, findOneAndUpdateOneForResInfo, deleteOneRes}= require('../model/')

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {//get

    const result = await readOne(this.mongo);

    reply.send(result)
         .code(200)
  })


  fastify.post('/', async function (request, reply) {//post

    const result = await findOneAndUpdateOne(this.mongo, request.body);

    console.log(request.body);
                                          
    reply.send(result)
         .code(201)
         
  })



  fastify.patch('/', async function (request, reply) {//patch

    const result = await findOneAndUpdateOneForResInfo(this.mongo, request.body);

    console.log(request.body);
                                          
    reply.send(result)
         .code(201)
         
  })




  //내일작성하기
  fastify.delete('/:id', async function (request, reply) {

    const result = await deleteOneRes(this.mongo, request.params.id);
                                          
    reply.send(result)
         .code(201)
         
  })

  fastify.put('/:id', async function (request, reply) {

     const result = await updateOne(this.mongo, request.params.id, request.body);
                                          
     reply.send(result)
          .code(201) 
         
  })




}
