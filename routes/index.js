var express = require('express');
var router = express.Router();
var Dboard = require('../models/dboard');
var Questionbank = require('../models/questionbank');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('first');
});

router.get('/quiz/:user', function(req, res, next) {
  // res.render('index');
  var id = req.params.user
  // console.log(id);
  Questionbank.find({})
   .exec(function(err,questionbank){
   	if(err){
   	}else{
   	var data1 = {'uid': id, 'questionbank': questionbank};
   	res.render('index',{
   			questionbank: data1
   	});
   }
  });
   // res.json(req.params.user)
  // Dboard.find({})
});


router.get('/quiz/user/:score', function(req, res, next) {
	var id = req.params.score;
	console.log(id);
  // res.render('index');
  Dboard.find({})
   .exec(function(err,dboard){
   	if(err){
   	} else {
   		// console.log(dboard);
   	res.render('scoreboard',{
   			dboard: dboard, id : req.params.score
   	});
   }
  });
   // res.json(req.params.user)
  // Dboard.find({})
});


router.get('/quiz/score/list', function(req, res, next) {
  // res.render('index');
  Dboard.find({})
   .exec(function(err,dboard){
  
   		// console.log(dboard);
   	res.render('scoreboard',{
   			dboard: dboard, id : 0
   	});
   
  });
   // res.json(req.params.user)
  // Dboard.find({})
});


router.put('/scoreboard', function(req, res, next) {
	// var ar1 = res.body
	var arr1 = req.body.arr
	var id = req.body.id
	console.log(id);
	Questionbank.find({})
	.exec(function(err,questionbank){
   	if(err){
   	}else{
   		var cunt = 0;
   		questionbank.forEach( function (scr, i){   		                  
        if(arr1[i] == questionbank[i].answer){
        	cunt = cunt + 2;
        	// console.log(cunt);
          // return res.json({err: false, cunt: cunt});
          } else{
          	// return res.json({err: true});	
          }
   		});
   		// console.log(cunt);
   		// var data = 
   		Dboard.findByIdAndUpdate(id, {score: cunt} , { new: true }, function (err, dboard) {
   		  // if (err) return console.log(err);
   		  res.json(dboard);
   		});
   		// return res.json({err: false, cunt: cunt});
   	}
   	
  });
	// return res.json({err: false});
  // res.render('first');
});

router.post('/quiz', function (req,res,next){
	// var data = req.body;	
	// res.json(data);
	// console.log(data);
	// var url = new Url(data);
	// var surl = shortid.characters('data');
	// var sid = shortid.generate();
	// console.log(sid);
	var count = 0 ;
	var data = {'name': req.body.name, 'score': count};
	console.log(data)
	var data1 = new Dboard(data);
	// console.log(data1);
	data1.save(function (err,result){
		if(err){
			return res.json({err: true});
		}
		return res.json({err: false, name:result.name, id:result._id });
	}); 
});


module.exports = router;
