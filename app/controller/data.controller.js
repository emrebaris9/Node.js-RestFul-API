const db = require('../config/db.config.js');
const Data = db.datas;

//Product Post 
exports.create = (req, res) => {
	// PostgreSQL database kaydet
	Data.create({
		"p": req.body.p,
		"qs": req.body.qs,
		"r": req.body.r,
		"i": req.body.i,
		"lt": req.body.lat,
		"ln": req.body.ln,
	}).then(data => {
		// Oluşan ürün cliente yolla
		res.json(data);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

//Tüm ürünleri getir
exports.findAll = (req, res) => {
	Data.findAll().then(datas => {
		// Tüm ürünleri cliente yolla
		res.json(datas.sort(function (c1, c2) { return c1.id - c2.id }));
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// İd ye göre Ürün getir
exports.findById = (req, res) => {
	Data.findById(req.params.id).then(data => {
		res.json(data);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

