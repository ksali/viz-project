const express = require('express');
var router = express.Router();

/* GET prototype page. */
router.get('/', function(req, res, next) {
  res.render('prototype', {});
});

module.exports = router;
