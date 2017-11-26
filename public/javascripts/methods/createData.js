(context => {
	'use strict';
	context.app = context.app || {};

	context.app.createData = function(conf) {
		// return new Promise.all([ 
		// 	fetch('/app/api/transactions/create-transaction', {
		// 		method: 'post',
		// 		body: JSON.stringify(conf),
		// 		headers: { 'Content-Type':  'application/json' },
		// 	})
		// ]).then(function(res) {
		// 	return console.log(322)
		// 	// return context.app.loadData('transactions');
		// });


		let promise = new Promise((resolve, reject) => {
			fetch('/app/api/transactions/create-transaction', {
				method: 'post',
				body: JSON.stringify(conf),
				headers: { 'Content-Type':  'application/json' },
			});
		    // переведёт промис в состояние fulfilled с результатом "result"
		   resolve("result");
		});

		// promise.then навешивает обработчики на успешный результат или ошибку
		promise
		  .then(
		    result => {
		      context.app.loadData('transactions');
		    },
		    error => {
		      alert("Rejected: " + error); // error - аргумент reject
		    }
		  );
		}
})(this);