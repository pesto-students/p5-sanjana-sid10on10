var express = require('express')
let router = express.Router()
var {url, mongodClient} = require('../config')
var {authenticate} = require('../common/auth')

router.post('/update', authenticate, async function(req, res, next) {
    try {
      let client = await mongodClient.connect(url)
      let db = client.db('assignment')
      let token = req.headers.authorization
      let user = jwt.verify(token, 'abcdefghklmn')
      let userId = user.id
      let userData = await db.collection('assets').findOne({userId:mongodb.ObjectId(userId)})
      if('equity' in req.body){
        let { equity } = req.body
        let update = await db.collection('accounts').findOneAndUpdate({userId:mongodb.ObjectId(userId)}, {$set:{equity: equity}})
      }
      if('fixed_income' in req.body){
        let { fixed_income } = req.body
        let update = await db.collection('accounts').findOneAndUpdate({userId:mongodb.ObjectId(userId)}, {$set:{fixed_income: fixed_income}})
      }
      if('alternatives' in req.body){
        let { alternatives } = req.body
        let update = await db.collection('accounts').findOneAndUpdate({userId:mongodb.ObjectId(userId)}, {$set:{alternatives: alternatives}})
      }
      return res.json({
        message: 'Asset has been updated'
      })
    } catch (error) {
      console.log(error)
    }
});

router.delete('/delete', authenticate, async function(req, res, next) {
    try {
      let client = await mongodClient.connect(url)
      let db = client.db('assignment')
      let token = req.headers.authorization
      let user = jwt.verify(token, 'abcdefghklmn')
      let userId = user.id
      let userData = await db.collection('assets').findOneAndDelete({userId:mongodb.ObjectId(userId)})
      return res.json({
        message: 'Asset has been deleted'
      })
    } catch (error) {
      console.log(error)
    }
});

module.exports = router