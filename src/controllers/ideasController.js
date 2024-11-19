const controller = {};

controller.lista = (req,res) =>  {
	req.getConnection((err, conn)=>{
		conn.query("select * from empresas", (errG, empresas)=>{
			if (errG){
				res.json(errG);
			}
			console.log(empresas)
			conn.query("select * from sector_economico", (errS, sector)=>{
				if (errS){
					res.json(errS);
				}
				conn.query("select * from innovacion", (errI, innova)=>{
					if (errI){
						res.json(errI);
					}
					conn.query("select * from experiencia", (errE, experiencia)=>{
						if (errE){
							res.json(errE);
						}
						res.render('ideas',{
							sector: sector,
							empresas: empresas,
							innova: innova,
							experiencia: experiencia
						});
					});
				});
			});
		});
	});
};

controller.puntosSector = (req,res) => {
	const {id} = req.params;
	req.getConnection((err,conn)=>{
		conn.query("select * from sector_economico where id= ?", [id], (err,rows)=>{
			res.json(rows[0].puntaje);
		});
	});
};

controller.puntosFactor = (req, res) => {
	const {id} = req.params;
	req.getConnection((err, conn) => {
		conn.query("select * from innovacion where id= ?", [id], (err, rows) => {
			res.json(rows[0].puntaje);
		});
	});
};

controller.puntosExperiencia = (req, res) => {
	const {id} = req.params;
	req.getConnection((err, conn) => {
		conn.query("select * from experiencia where id= ?", [id], (err, rows) => {
			res.json(rows[0].puntos);
		});
	});
};


controller.guardar = (req, res) =>{
	const data = req.body;
	req.getConnection((err,conn)=>{
		conn.query("insert into ideas set ?",[data],(errD,rows)=>{
			if (err){
				res.json(errD);
			}
			res.redirect('/ideas');
		});
	});
};

module.exports = controller;