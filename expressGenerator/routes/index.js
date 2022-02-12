var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const values=['abc','def','ghi','jkl']
  const person={name:'Sajith',comments:{comment:'SAMPLE COMMENT',date:'12-2-2022'},admin:false}
  res.render('index', { person,values,title: 'My World',name: 'Sajith' });
});

module.exports = router;
