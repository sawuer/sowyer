function loadData(name) {
	var res;
	fetch('/app/api')
		.then(res => res.json())
		.then(i => {
			var temp = `
				<tr>
			    <th>name</th>
			    <th>date</th>
			    <th>currency</th>
			  </tr>
			`;
			i[0][name].forEach(j => {
				temp += `
					<tr>
						<td>${j.title}</td>
						<td>${j.date}</td>
						<td>${j.cost}</td>
					</tr>
				`;
			})
			document.querySelector('#app-transactions').innerHTML = temp;
		})
}

loadData('transactions');