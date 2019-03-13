const db = require('../config/db.config.js');
const Contact = db.contacts;

//Product Post
exports.create = (req, res) => {
    // PostgreSQL database kaydet
    Contact.create({
        "fname": req.body.fname,
        "lname": req.body.lname,
        "email": req.body.email,
        "phone": req.body.phone,
        "message": req.body.message
    }).then(contact => {
        // Oluşan ürün cliente yolla
        res.json(contact);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

//Tüm ürünleri getir
exports.findAll = (req, res) => {
    Contact.findAll().then(contacts => {
        // Tüm ürünleri cliente yolla
        res.json(contacts.sort(function (c1, c2) { return c1.id - c2.id }));
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

// İd ye göre Ürün getir
exports.findById = (req, res) => {
    Contact.findById(req.params.id).then(contact => {
        res.json(contact);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};

// Product Güncelle
exports.update = (req, res) => {
    const id = req.body.id;
    Contact.update(req.body,
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
    Contact.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).json({ msg: 'Silme Başarılı -> Product Id = ' + id });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err });
    });
};
