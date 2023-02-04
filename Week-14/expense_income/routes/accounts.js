var express = require('express')
let router = express.Router()
var {url, mongodClient} = require('../config')
var {authenticate} = require('../common/auth')

router.post('/add/income', authenticate, async function(req, res, next) {
    try {
      let client = await mongodClient.connect(url)
      let db = client.db('assignment')
      let token = req.headers.authorization
      let user = jwt.verify(token, 'abcdefghklmn')
      let userId = user.id
      let email = user.email
      let userData = await db.collection('accounts').findOne({userId:mongodb.ObjectId(userId)})
      let income = userData['income']
      let { month, data, year } = req.body
      income[year][month] = data
      let update = await db.collection('accounts').findOneAndUpdate({userId:mongodb.ObjectId(userId)}, {$set:{income: income}})
      let sending = await sendEmail(email, "Income added", 'Income has been added')
      return res.json({
        message: 'Income has been added'
      })
    } catch (error) {
      console.log(error)
    }
});

router.post('/add/expense', authenticate, async function(req, res, next) {
    try {
        let client = await mongodClient.connect(url)
        let db = client.db('assignment')
        let token = req.headers.authorization
        let user = jwt.verify(token, 'abcdefghklmn')
        let userId = user.id
        let userData = await db.collection('accounts').findOne({userId:mongodb.ObjectId(userId)})
        let expense = userData['expense']
        let { month, data, year } = req.body
        expense[year][month] = data
        let update = await db.collection('accounts').findOneAndUpdate({userId:mongodb.ObjectId(userId)}, {$set:{expense: expense}})
        let sending = await sendEmail(email, "Expense added", 'Expense has been added')
        return res.json({
            message: 'Expense has been added'
        })
    } catch (error) {
        console.log(error)
    }
});

module.exports = router