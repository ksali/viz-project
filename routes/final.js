var express = require('express');
var router = express.Router();

/* GET final page. */
router.get('/', function(req, res, next) {
  res.render('underconstruction', {title:'Final'});
});

module.exports = router;
