// var express = require('express');
// var router = express.Router();
// var mongo = require('mongodb').MongoClient;
// var ObjectID = require('mongodb').ObjectID;
// var assert = require('assert');
// var url = 'mongodb://localhost:27017/moneyapp';
// var api = '/app/api';

// router.post('/', (req, res, next) => {
// 	mongo.connect(url, (err, db) => {
// 		assert.equal(null, err);
// 		db.collection('users')
// 			.update({ '_id': ObjectID('5a197c1af7d11cd211b8dd95')}, { 
// 				$push: { 
// 					transactions: {
// 						'_id': (Math.random() + '').split('.')[1].slice(1, 10),
// 						title: req.body.title,
// 						type: req.body.type,
// 						date: req.body.date,
// 						cost: req.body.cost,
// 					}
// 				}}, (err, docs) => {
// 					if (err) console.log(err)
// 					db.close();
// 				});
// 	});
// });

// module.exports = router;