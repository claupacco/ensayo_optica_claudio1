var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 
  let log1 = req.session.login; 
  
  res.render('index', { login: log1 });
});

module.exports = router;
