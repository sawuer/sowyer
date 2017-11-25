function loadData(name) {
	var res;
	fetch('/app/api')
		.then(res => res.json())
		.then(i => {
			console.log(i[0][name])
			document.querySelector('#app-transactions')
			res = i[0][name];
		})
	return res;
}

console.log(loadData('transactions'));