(context => {
	'use strict';
	context.app = context.app || {};

	context.app.loadData = name => {
		fetch('/app/api')
			.then(res => res.json())
			.then(i => {
				$_('#app-transactions').innerHTML = `<tr>
			    <th>title</th>
			    <th>type</th>
			    <th>date</th>
			    <th>currency</th>
			  </tr>`;
				var temp = [];
				i[0][name].forEach((j, idx) => {
					temp.unshift(`
						<tr data-transaction="${idx}">
							<td>${j.title}</td>
							<td>${j.type}</td>
							<td>${j.date}</td>
							<td>${j.cost}</td>
						</tr>
					`);
				});
				$_('#app-transactions').innerHTML += temp.join('');
			})
		};

})(this);