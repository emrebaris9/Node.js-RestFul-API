module.exports = function (app) {
    const topics = require('../controller/topic.controller.js');

    // Yeni Ürün oluştur
    app.post('/api/topics', topics.create);

    // Tüm ürünler 
    app.get('/api/topics', topics.findAll);

    // İd ile 1 tane ürün getir
    app.get('/api/topics/:id', topics.findById);

    // İd ile ürün Güncelle
    app.put('/api/topics', topics.update);

    // İd ile ürünü sil
    app.delete('/api/topics/:id', topics.delete);
};
