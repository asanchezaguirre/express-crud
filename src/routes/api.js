

//configurar rutas

const { Router } = require('express')

const app = Router()


//Jalar controladores
const Companies = require('../controllers/companies/companies')

//crear primera ruta de petición
app.get('/companies', Companies.index)//llamamos de Companies a la funcion index

app.get('/companies/:id', Companies.find)//llamamos de Companies a la función find, que es la qe usca por id







module.exports = app;