var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');
var url = 'mongodb://localhost:27017/moneyapp'



router.get('/', (req, res, next) => {
	var transactions = [];
	mongo.connect(url, (err, db) => {
		assert.equal(null, err);
		db.collection('transactions').find().forEach(i => {
			transactions.push(i);
		}, () => {
			db.close();
			res.render('index', {
				transactions,
				currency: 'тг'
			})
		});
	});
});



router.post('/insert', (req, res, next) => {
	var model = {
		title: req.body.title,
		cost: req.body.cost,
		date: req.body.date,
	};
	mongo.connect(url, (err, db) => {
		assert.equal(null, err);
		db.collection('transactions').insertOne(model, (err, result) => {
			assert.equal(null, err);
			db.close();
			res.redirect('/');
		});
	});
});



router.post('/update', (req, res, next) => {
	var model = {
		title: req.body.title,
		cost: req.body.cost,
		date: req.body.date,
	};
	mongo.connect(url, (err, db) => {
		assert.equal(null, err);
		db.collection('transactions').updateOne({
			'_id': ObjectID(req.body.key)
		}, {
			$set: model
		}, (err, result) => {
			assert.equal(null, err);
			db.close();
			res.redirect('/');
		});
	});
});



router.post('/delete', (req, res, next) => {
	mongo.connect(url, (err, db) => {
		assert.equal(null, err);
		db.collection('transactions').deleteOne({
			'_id': ObjectID(req.body.key)
		}, (err, result) => {
			assert.equal(null, err);
			console.log('Data deleted');
			db.close();
			res.redirect('/');
		});
	});
});



module.exports = router;












