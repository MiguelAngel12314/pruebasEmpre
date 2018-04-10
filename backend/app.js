(() => {
	"use strict";
	const app = require("express")();
	const cors = require("cors");
	const bodyParser = require("body-parser");
	app.use(cors());

	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.post('/ordenar',(req, res) => {		
		let ordenar = [];
		
		Object.keys(req.body).map(x => {
			ordenar.push(parseInt(req.body[x]));
		});
		let ordenado = ordenar.sort((a,b) => a-b);
		res.json({ordenados: ordenado, numeros: req.body});
	});

	app.listen(5000, () => {
		console.log("listen to port 5000");
	});

})();