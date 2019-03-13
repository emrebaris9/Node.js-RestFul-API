const db = require('../config/db.config.js');
const Comment = db.comments;

//Product Post
exports.create = (req, res) => {
	// PostgreSQL database kaydet
	Comment.create({
		"commentName": req.body.commentName,
		"commentMail": req.body.commentMail,
		"commentHeader": req.body.commentHeader,
		"comment1": req.body.comment1,
		"topicName":req.body.topicId
	}).then(comment => {
		// Oluşan ürün cliente yolla
		res.json(comment);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

//Tüm ürünleri getir
exports.findAll = (req, res) => {
	Comment.findAll().then(comments => {
		// Tüm ürünleri cliente yolla
		res.json(comments.sort(function (c1, c2) { return c1.id - c2.id }));
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// İd ye göre Ürün getir
exports.findById = (req, res) => {
	Comment.findById(req.params.id).then(comment => {
		res.json(comment);
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};

// Product Güncelle
exports.update = (req, res) => {
	const id = req.body.id;
	Comment.update(req.body,
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
	Comment.destroy({
		where: { id: id }
	}).then(() => {
		res.status(200).json({ msg: 'Silme Başarılı -> Product Id = ' + id });
	}).catch(err => {
		console.log(err);
		res.status(500).json({ msg: "error", details: err });
	});
};
