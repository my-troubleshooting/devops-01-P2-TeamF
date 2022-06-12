'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
require('dotenv').config()




//const url = 'mongodb://root:example@mongodb-c985c7542be39044.elb.ap-northeast-2.amazonaws.com/baedal'
const url = 'mongodb://root:example@mongodb-c985c7542be39044.elb.ap-northeast-2.amazonaws.com:27017/baedal?authSource=admin&readPreference=primary&ssl=false'




module.exports = async function (fastify, opts) {

  fastify.register(require('fastify-cors'), {
    origin: true
  })

  fastify.register(require('fastify-mongodb'), {
    // force to close the mongodb connection when app stopped
    // the default value is false
    // mongo db 연결 
      forceClose: true,
      url: url
  })


  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application // /// 
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
