(context => {
	'use strict';
	context.app = context.app || {};

	context.app.deleteData = id => {
		$_(`[data-row='${id}']`).classList.add('fadeOut');
		new Promise((res, rej) => {
			fetch('/app/api/transactions/delete-transaction/' + id, {
				method: 'delete',
			});
		  res('result');
		}).then(
			result => setTimeout(() => context.app.loadData('transactions', 500)),
		  error => console.warn('rejected:', error)
		);
	}
})(this);