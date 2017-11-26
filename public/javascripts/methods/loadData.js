(context => {
	'use strict';
	context.app = context.app || {};

	context.app.loadData = name => {
		fetch('/app/api')
			.then(res => res.json())
			.then(it => {
				var rows = [];
				var cash = 0;
				$_('#app-transactions').innerHTML = `<tr>
			    <th>title</th><th>type</th>
			    <th>date</th><th>currency</th>
			  </tr>`;
				it[0][name].forEach(j => {
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
					console.log(+j.cost)
					if (j.cost) {
						cash -= +j.cost;
					} else {
						cash = 0;
					}
					$_('#cash').innerHTML = cash;
				});
				$_('#app-transactions').innerHTML += rows.join('');
			})
		};

})(this);