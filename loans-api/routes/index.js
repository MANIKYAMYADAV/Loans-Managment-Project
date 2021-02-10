var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',sub:"Welcome to learn new things about Express JS" });
});
router.get('/angular', function(req, res, next) {
  var course = req.query.course;
  let courseTitle = 'ARC TUTORIAL -' + course;
  res.render('index', { title:courseTitle,sub:"Welcome to learn new things about Express JS" });
});

module.exports = router;
