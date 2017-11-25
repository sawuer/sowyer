(context => {
	'use strict';
	context.app = context.app || {};

	context.app.deleteData = (e, id) => {
		console.log(e.target.parentNode.parentNode)
		e.target.parentNode.parentNode.classList.add('fadeOut');
		fetch('/app/api/transactions/delete-transaction/' + id, {
			method: 'delete',
		});
		setTimeout(() => {
			context.app.loadData('transactions');
		}, 500);
	}
})(this);