var express = require('express');
var router = express.Router();
var Cars=require('../models/cars');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/',async(req,res,next)=>{
  try {
      var data=await Cars.find().populate("_id");
      res.json({ 
      'status':200,
      'mes':"list success",
      'data':data

      })
    
  } catch (error) {
      console.log(error);
  }
})

module.exports = router;
