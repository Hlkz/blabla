var express = require('express');
var router = express.Router();

var ValidPath = (base, str) => {
    console.log("valid", base, str)
    switch(base) {
      case "page":
        console.log("inpage")
        break
      default:
        return false
    }
}

var frenchregex = /^[a-zA-ZÀ-ÿ0-9_]*$/

router.use('/page', function(req, res, next) {
    const base = req.baseUrl.substring(1)
    const str = decodeURIComponent(req.path.substring(1))
    if (frenchregex.exec(str)) {
        ValidPath(base, str)
    }
    //next()
});

    import pages_json from '../src/json/pages.json'
router.get('/', function(req, res) {
    //pages_json.forEach(function(page) {
    //    console.log(page.nameEN)
    //})
  res.render('default', { title: 'Express', pages: pages_json }, function(err, html) {
	  //var menutr = document.getElementById('menutr')
	  //menutr.innerHTML("daipdazihz")
	  res.send(html);
  });
});



module.exports = router;


/*

module.exports = {
  validpath: (base, str) => {
    console.log("hey coucou ", base, str)
  },
}
*/