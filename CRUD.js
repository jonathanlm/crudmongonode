module.exports.insertarRegistro=function(db,callback){
	let collection=db.collection("users")

	coleccion.insertMany([
		{nombre: "jonathan", edad: 21, peso: 80},
		{nombre: "Juan", edad: 22, peso: 82},
		{nombre: "El Soler :V", edad: 23, peso: 90},

		{nombre: "Liz", edad: 22, peso: 60},
		{nombre: "Karla", edad: 23, peso: 70},
		{nombre: "Walas", edad: 24, peso: 70},
		{nombre: "Jose", edad: 26, peso: 74},

		], (error, result) => {
			console.log("Resultado de insert: " + result.toString())
		})
	}