const controller = {};

controller.lista = (req,res) => {
	req.getConnection((err, conn)=>{
		conn.query("select * from empresas", (err, empresa)=>{
			if (err){
				res.json(err);
			}
			conn.query("select distinct ficha from aprendices", (erra, fichas)=>{
				if (erra){
					res.json(erra);
				}
				res.render('empresas',{
					data: empresa,
					fichas: fichas
				});
			});
		});
	});
};

controller.save = (req,res) =>{
	const data = req.body;
	req.getConnection((err,conn)=>{
		conn.query("insert into empresas(nombre, integrantes) values(?, ?)",[data.nombre, data.integrantes],(err,rows)=>{
			res.redirect('/empresa');
		});
	});
};


controller.editar = (req, res) => {
	const {id} = req.params;
	req.getConnection((err,conn)=>{
		conn.query("select * from empresas where id= ?", [id], (err,rows)=>{
			res.render('empresas_edit',{
				data: rows[0]
			});
		});
	});
};

controller.actualizar = (req, res) => {
	const {id} = req.params;
	const newCliente = req.body;
	req.getConnection((err,conn) => {
		conn.query("update empresas set ? where id = ?", [newCliente, id], (err, rows) => {
			res.redirect('/empresa');
		});
	});
};


controller.eliminar = (req,res) =>{
	const {id} = req.params;
	req.getConnection((err,conn)=>{
		conn.query("delete from empresas where id= ?",[id],(err,rows)=>{
			res.redirect('/empresa');
		});
	});
};


controller.listaaprendices = (req,res) => {
	const {ficha} = req.params;
	req.getConnection((err,conn)=>{
		conn.query("select * from aprendices where ficha= ?", [ficha], (err, aprendiz)=>{
			if (err) {
				console.error('Error al obtener ciudades:', err);
	      		return res.status(500).send('Error al obtener ciudades');
			}
			res.json(aprendiz);
		});
	});
};

module.exports = controller;