const controller = {};

controller.lista = (req,res) =>  {
	req.getConnection((err, conn)=>{
		conn.query("select * from aprendices",(err, aprendiz)=>{
			if (err){
				res.json(erra);
			}
			res.render('conaprendices',{
				data: aprendiz
			});
		});
	});
};

controller.eliminar = (req,res) =>{
	const {id} = req.params;
	req.getConnection((err,conn)=>{
		conn.query("delete from aprendices where id= ?",[id],(err,rows)=>{
			res.redirect('/consulta');
		});
	});
};

controller.editar = (req, res) => {
	const {id} = req.params;
	req.getConnection((err,conn)=>{
		conn.query("select * from aprendices where id= ?", [id], (err,rows)=>{
			res.render('aprendices_edit',{
				data: rows[0]
			});
		});
	});
};

controller.actualizar = (req, res) => {
	const {id} = req.params;
	const newCliente = req.body;
	req.getConnection((err,conn) => {
		conn.query("update aprendices set ? where id = ?", [newCliente, id], (err, rows) => {
			res.redirect('/consulta');
		});
	});
};

module.exports = controller;