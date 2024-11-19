const controller = {};
const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

controller.cargar = (req,res) => {
	const file = req.file;

	if (!file) {
		return res.status(400).send('Archivo no fue cargado');
	}

	// Leemos el archivo Excel
	const workbook = XLSX.readFile(file.path);
  	const sheet_name_list = workbook.SheetNames;

  	// Suponemos que el archivo tiene solo una hoja y tomamos los datos
	const worksheet = workbook.Sheets[sheet_name_list[0]];
	let valorD2 = worksheet['D2'] ? worksheet['D2'].v : null;
	valorD2=valorD2.substring(1,7)
	req.getConnection((err, conn) => {
		conn.query("select * from aprendices where ficha= ?", valorD2, (err, rows) => {
			if(err){
				console.log(err);
				return res.send('Error en el proceso');
			}
			if(rows.length==0){
				sw=1;
			}else{
				sw=0;
			}
			const data = [];
			let rowIndex = 6;

			// Leer las filas de la 6 en adelante
			let identificacion=0;
			let nombre="";
			let apellido="";
		  	while (worksheet[`C${rowIndex}`] || worksheet[`D${rowIndex}`] || worksheet[`E${rowIndex}`]) {

		  		identificacion = worksheet[`C${rowIndex}`] ? worksheet[`C${rowIndex}`].v : '';
			    nombre = worksheet[`D${rowIndex}`] ? worksheet[`D${rowIndex}`].v : '';
			    apellido = worksheet[`E${rowIndex}`] ? worksheet[`E${rowIndex}`].v : '';

			    // Si todas las celdas están vacías, dejamos de procesar
			    if (!identificacion && !nombre && !apellido) break;

			    // Añadimos los datos al arreglo
			    data.push({ identificacion, nombre, apellido, valorD2 });
			    rowIndex++;
			}
			if(sw==1){
				const query = 'INSERT INTO aprendices (identificacion, nombre, apellido, ficha) VALUES ?';
			  	const values = data.map(row => [row.identificacion, row.nombre, row.apellido, row.valorD2]);

				req.getConnection((err, conn)=>{
					conn.query(query, [values], (err, result)=>{
						if (err) {
					    	console.error(err);
					      	return res.status(500).send('Error al insertar los datos.');
					    }
						res.redirect('/aprendices');
					});
				});
			}else{
				console.log("Ficha ya fue importada a la BD");
				res.redirect('/aprendices');
			}
			// Borramos el archivo después de procesarlo
			fs.unlinkSync(file.path);
		});
	});
};

controller.obtener = (req, res) => {
	req.getConnection((err, conn)=>{
		conn.query("select * from aprendices", (err, results)=>{
			if (err) {
		    	console.error(err);
		    	return res.status(500).send('Error al obtener los aprendices.');
		    }
		    res.render('aprendices', { aprendices: results });
		});
	});
};


module.exports = controller;