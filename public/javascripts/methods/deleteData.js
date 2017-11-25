(context => {
	'use strict';
	context.app = context.app || {};

	context.app.deleteData = id => {
		$_(`[data-row='${id}']`).classList.add('fadeOut');
		fetch('/app/api/transactions/delete-transaction/' + id, {
			method: 'delete',
		});
		setTimeout(() => context.app.loadData('transactions'), 500);
	}
})(this);