(context => {
	'use strict';
	context.app = context.app || {};

	context.app.loadData = name => {
		fetch('/app/api')
			.then(res => res.json())
			.then(i => {
				var rows = [];
				$_('#app-transactions').innerHTML = `<tr>
			    <th>title</th><th>type</th>
			    <th>date</th><th>currency</th>
			  </tr>`;
				i[0][name].forEach((j, idx) => {
					rows.unshift(`
						<tr data-row="${j['_id']}">
							<td>${j.title}</td>
							<td>${j.type}</td>
							<td>${j.date}</td>
							<td>
								${j.cost} 
								<button onclick="app.deleteData('${j['_id']}')">X</button>
							</td>
						</tr>
					`);
				});
				$_('#app-transactions').innerHTML += rows.join('');
			})
		};

})(this);