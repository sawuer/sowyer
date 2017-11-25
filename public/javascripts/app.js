(context => {
	'use strict';

	context.app = {
		loadData(name) {
			fetch('/app/api')
				.then(res => res.json())
				.then(i => {
					var temp = [];
					i[0][name].forEach((j, idx) => {
						temp.unshift(`
							<tr data-transaction="${idx}">
								<td>${j.title}</td>
								<td>${j.date}</td>
								<td>${j.cost}</td>
							</tr>
						`);
					})
					$_('#app-transactions').innerHTML += temp.join('');
				})
		},

	}
})(this);



app.loadData('transactions');