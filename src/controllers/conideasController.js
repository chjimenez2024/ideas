const controller = {};

controller.lista = (req,res) => {
	req.getConnection((err, conn)=>{
		conn.query("select ideas.id,idea,mercado,fuentes,nombre,integrantes from ideas inner join empresas on empresas.id=ideas.grupo", (err, idea)=>{
			if (err){
				res.json(err);
			}
			res.render('conideas',{
				data: idea
			});
		});

	});
};

controller.eliminar = (req,res) =>{
	const {id} = req.params;
	req.getConnection((err,conn)=>{
		conn.query("delete from ideas where id= ?",[id],(err,rows)=>{
			res.redirect('/conideas');
		});
	});
};


module.exports = controller;