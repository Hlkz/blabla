var express = require('express');
var router = express.Router();

import pages_json from '../src/json/pages.json'
pages_json.forEach(function(page) {
    console.log(page.nameEN)
})


/* GET home page. */
router.get('/', function(req, res, next) {
//	var butts = '<div>PAZIDJADIHAZOAIHZDOAIDHAZOIAHZIOAHDOIAHZZAOIHZA</div>';
  res.render('default', { title: 'Express', pages: pages_json }, function(err, html) {
	  //var menutr = document.getElementById('menutr')
	  //menutr.innerHTML("daipdazihz")
	  res.send(html);
  });
});

module.exports = router;
