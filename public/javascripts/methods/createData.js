(context => {
	'use strict';
	context.app = context.app || {};

	context.app.createData = conf => {
		fetch('/app/api/transactions/create-transaction', {
			method: 'post',
			body: JSON.stringify(conf),
			headers: { 'Content-Type':  'application/json' },
		})
		.then(res => res.json())
		.then(() => {
			console.log(3223)
			context.app.loadData('transactions');
		});
	}
})(this);