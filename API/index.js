const{ ObjectId } = require('fastify-mongodb')

module.exports = {
    readAll: async (mongo) => {
        const collection = mongo.db.collection('restaurants')
        const result = await collection.find({}).toArray()
        return result
    },

    findOneAndCreateOne: async (mongo, id, body) => {
        const collection = mongo.db.collection('restaurants')
        const findOne = await collection.findOne({
          _id: ObjectId(id)
        })
    
        const newMenu = { _id: new ObjectId(),
          ...body
        }
    
        console.log(findOne);
    
        const res = await collection.updateOne({
    
           _id: ObjectId(id)
          }, {
            $set: {
              ...findOne,//findOne을 불러온다음
              menu : [...findOne.menu, newMenu]//그안의 메뉴가 객체이니까 그 객체안에 배열을 추가하기 
    
            } 
          })
        //const result = await collection.insertOne(body)
        //return result
    
      },
      menudeleteOne: async(mongo, id) => {
          const collection = mongo.db.collection('restaurants')
          const find = await collection.findOne({
              _id: ObjectId(id)
          })
          const query = ({ "menu": ObjectId(id)})
          const result = await collection.deleteOne(query)
          return result
           
        }
    }