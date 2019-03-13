
const db = require('../config/db.config.js');
const Category = db.categories;

//Tüm ürünleri getir
exports.findAll = (req, res) => {
	Category.findAll().then(categories => {
		// Tüm ürünler cliente yolla
		res.json(categories.sort(function (c1, c2) { return c1.id - c2.id }));
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};
// İd ye göre Ürün getir
exports.findById = (req, res) => {
	Category.findById(req.params.id).then(category => {
		res.json(category);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};
