const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendStatus(500)
  //res.send('respond with a resource')
})


module.exports = router
