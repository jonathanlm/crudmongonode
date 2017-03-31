var MongoClient = require('mongodb').MongoClient

var url="mongodb://localhost:nodeDriver"

var Operaciones = require('./CRUD.js')

MongoClient.connect(url, function(err, db){
	if(err)console.log(err)
		console.log("Conexion Establecida con la Base de Datos")
	Operaciones.insertarRegistro(db, (error, result) =>{
		if(error)console.log("Error insertando los registros: "+error)
	})
})