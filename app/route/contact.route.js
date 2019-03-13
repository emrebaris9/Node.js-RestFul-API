module.exports = function (app) {
    const contacts = require('../controller/contact.controller.js');

    // Yeni Ürün oluştur
    app.post('/api/contacts', contacts.create);

    // Tüm ürünler
    app.get('/api/contacts', contacts.findAll);

    // İd ile 1 tane ürün getir
    app.get('/api/contacts/:id', contacts.findById);

    // İd ile ürün Güncelle
    app.put('/api/contacts', contacts.update);

    // İd ile ürünü sil
    app.delete('/api/contacts/:id', contacts.delete);
};
