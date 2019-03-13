const db = require('../config/db.config.js');
const Topic = db.topics;

//Product Post 
exports.create = (req, res) => {
	// PostgreSQL database kaydet
	Topic.create({
		"title": req.body.title,
		"desc": req.body.desc,
		"imageUrl": req.body.imageUrl,
		"minute": req.body.minute
	}).then(topic => {
		// Oluşan ürün cliente yolla
		res.json(topic);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

//Tüm ürünleri getir
exports.findAll = (req, res) => {
	Topic.findAll().then(topics => {
		// Tüm ürünleri cliente yolla
		res.json(topics.sort(function (c1, c2) { return c1.id - c2.id }));
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// İd ye göre Ürün getir
exports.findById = (req, res) => {
	Topic.findById(req.params.id).then(topic => {
		res.json(topic);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// Product Güncelle
exports.update = (req, res) => {
	const id = req.body.id;
	Topic.update(req.body,
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
	Topic.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).json({ msg: 'Silme Başarılı -> Product Id = ' + id });
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};
