const { ObjectId } = require('fastify-mongodb')

module.exports = {

  readOne: async (mongo) => {//api/restaurant get (o)
    const id = '6245c30f86e7460caa5940ac';
    const collection = mongo.db.collection('restaurants')
    const result = await collection.findOne({
      _id: ObjectId(id)
    })
    return result
  },  
  



  findOneAndUpdateOneForResInfo: async (mongo, body) => {//api/restaurant :patch (o)
    const collection = mongo.db.collection('restaurants')
    const id = '6245c30f86e7460caa5940ac';
    const findOne = await collection.findOne({
      _id: ObjectId(id)
    })


    console.log(findOne);

     const result = await collection.updateOne({

       _id: ObjectId(id)
      }, {
        $set: {           
          ...findOne,//findOne을 불러온다음
          name : body.name,
          address : body.address
        } 
      })

      return result;

  },

  findOneAndUpdateOne: async (mongo, body) => {//api/menu :post (c)
    const id = '6245c30f86e7460caa5940ac'
    const collection = mongo.db.collection('restaurants')
    const findOne = await collection.findOne({
      _id: ObjectId(id)
    })

    const newMenu = { _id: new ObjectId(),
      ...body
    }

    console.log(findOne);

     const result = await collection.updateOne({

       _id: ObjectId(id)
      }, {
        $set: {           
          ...findOne,//findOne을 불러온다음
          menu : [...findOne.menu, newMenu]//그안의 메뉴가 객체이니까 그 객체안에 배열을 추가하기 

        } 
      })

    return result

  },


  //delete와 put 부분 내일 작성하기  


  deleteOneRes: async (mongo, id) => {

    const collection = mongo.db.collection('restaurants')
    //find() 함수 compass에는 작동되지만 node fastify에서는 작동을 안함
    //const result = collection.findOne({
    //  _id: ObjectId("6245c30f86e7460caa5940ac")

    //})

    //console.log(found["menu"].filter(el => el["_id"].toString() !== id))

    const rr = await restarant.updateMany(     
      { }, {$pull : {"menu" : {"_id" : ObjectId(id)}}}
    );

    return result;


  }


}
