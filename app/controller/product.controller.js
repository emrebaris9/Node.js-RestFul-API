const db = require('../config/db.config.js');
const Product = db.products;

//Product Post 
exports.create = (req, res) => {
	// PostgreSQL database kaydet
	Product.create({
		"name": req.body.name,
		"desc": req.body.desc,
		"piece": req.body.piece,
		"price": req.body.price,
		"categoryId": req.body.categoryId,
		"imageUrl": req.body.imageUrl
	}).then(product => {
		// Oluşan ürün cliente yolla
		res.json(product);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

//Tüm ürünleri getir
exports.findAll = (req, res) => {
	Product.findAll().then(products => {
		// Tüm ürünleri cliente yolla
		res.json(products.sort(function (c1, c2) { return c1.id - c2.id }));
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// İd ye göre Ürün getir
exports.findById = (req, res) => {
	Product.findById(req.params.id).then(product => {
		res.json(product);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// Product Güncelle
exports.update = (req, res) => {
	const id = req.body.id;
	Product.update(req.body,
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
	Product.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).json({ msg: 'Silme Başarılı -> Product Id = ' + id });
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};