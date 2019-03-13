const db = require('../config/db.config.js');
const Auth = db.auths;

//Product Post 
exports.create = (req, res) => {
	// PostgreSQL database kaydet
	Auth.create({
		"userName": req.body.userName,
		"password": req.body.password,
	}).then(auth => {
		// Oluşan ürün cliente yolla
		res.json(auth);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

//Tüm ürünleri getir
exports.findAll = (req, res) => {
	Auth.findAll().then(auths => {
		// Tüm ürünleri cliente yolla
		res.json(auths.sort(function (c1, c2) { return c1.id - c2.id }));
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// İd ye göre Ürün getir
exports.findById = (req, res) => {
	Auth.findById(req.params.id).then(auth => {
		res.json(auth);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// Product Güncelle
exports.update = (req, res) => {
	const id = req.body.id;
	Auth.update(req.body,
		{ where: { id: id } }).then(() => {
			res.status(200).json({ mgs: "Güncelleme Başarılı -> "});
		}).catch(err => {
			console.log(err);
			res.status(500).json({ msg: "error", details: err });
		});
};

// İd ye göre sil
exports.delete = (req, res) => {
	const id = req.params.id;
	Auth.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).json({ msg: 'Silme Başarılı -> Product Id = ' + id });
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};
