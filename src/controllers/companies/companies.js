//Deinir funciones para htttp request

//jalar la data de las compañias
const companies = require('../../../data')

//crear una variable que trabaje com multiples funciones que seran los controladores
const controllers = {
	index: (req, res) => {
		res
			.status(200)
			.json({
				data: companies
			})
	},

	find: (req, res) => {
		console.log(req.params.id)
		const queryId = req.params.id

		const company = companies.data.filter(company => {
			return company.id.toString() === queryId
		})


		res
		.status(200)
		.json({
			data: company
		})
	
	}

	

}




//exportar
module.exports = controllers;