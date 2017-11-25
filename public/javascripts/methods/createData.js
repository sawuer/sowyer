(context => {
	'use strict';
	context.app = context.app || {};

	context.app.createData = conf => {
		console.log(conf)
		fetch('/app/api/transactions/create-transaction', {
			method: 'post',
			body: JSON.stringify(conf),
			headers: {
				'Content-Type':  'application/json'
			}
		});
		context.app.loadData('transactions');
	}
})(this);