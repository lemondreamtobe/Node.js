var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Express',name:'zhanglinfeng' });
});

module.exports = router;
//exports.index = function(req, res) {
//	res.render('index.jade', {name:'zhanglinfeng', book:'node.js',title:'study'}
//}
