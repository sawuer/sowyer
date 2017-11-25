var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');
var url = 'mongodb://localhost:27017/moneyapp';
var api = '/app/api';


router.get('/', (req, res, next) => {
	res.render('index');
});


router.get('/app', (req, res, next) => {
	res.render('app', {
		title: 'Moneyapp',
	});
});




router.get(api, (req, res, next) => {
	mongo.connect(url, (err, db) => {
		assert.equal(null, err);
		db.collection('users')
			.find({ '_id': ObjectID('5a197c1af7d11cd211b8dd95')})
			.toArray((err, docs) => {
				res.send(docs)
				db.close();
			});
	});
});



router.post(api + '/transactions/create-transaction', (req, res, next) => {
	var model = {
		title: req.body.title,
		type: req.body.type,
		date: req.body.date,
		cost: req.body.cost,
	};
	mongo.connect(url, (err, db) => {
		assert.equal(null, err);
		db.collection('users')
			.update({ '_id': ObjectID('5a197c1af7d11cd211b8dd95')}, 
				{ $push: { transactions: model}
				}, (err, docs) => {
					if (err) console.log(err)
					db.close();
				});
	});
});



// router.post('/app/api/create-transaction', (req, res, next) => {
// 	var model = {
// 		title: req.body.title,
// 		title: req.body.type,
// 		date: req.body.date,
// 		cost: req.body.cost,
// 	};
// 	mongo.connect(url, (err, db) => {
// 		assert.equal(null, err);
// 		db.collection('users').find({
// 			'_id': ObjectID('5a197c1af7d11cd211b8dd95')
// 		}).find('data').insertOne(model, (err, result) => {
// 			assert.equal(null, err);
// 			db.close();
// 			// res.redirect('/');
// 		});
// 		// db.collection('transactions').insertOne(model, (err, result) => {
// 		// 	assert.equal(null, err);
// 		// 	db.close();
// 		// 	res.redirect('/');
// 		// });
// 	});
// });



// router.post('/update', (req, res, next) => {
// 	var model = {
// 		title: req.body.title,
// 		cost: req.body.cost,
// 		date: req.body.date,
// 	};
// 	mongo.connect(url, (err, db) => {
// 		assert.equal(null, err);
// 		db.collection('transactions').updateOne({
// 			'_id': ObjectID(req.body.key)
// 		}, {
// 			$set: model
// 		}, (err, result) => {
// 			assert.equal(null, err);
// 			db.close();
// 			res.redirect('/');
// 		});
// 	});
// });



// router.post('/delete', (req, res, next) => {
// 	mongo.connect(url, (err, db) => {
// 		assert.equal(null, err);
// 		db.collection('transactions').deleteOne({
// 			'_id': ObjectID(req.body.key)
// 		}, (err, result) => {
// 			assert.equal(null, err);
// 			console.log('Data deleted');
// 			db.close();
// 			res.redirect('/');
// 		});
// 	});
// });



module.exports = router;












