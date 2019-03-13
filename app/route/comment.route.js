module.exports = function (app) {
    const comments = require('../controller/comment.controller.js');

    // Yeni Ürün oluştur
    app.post('/api/comments', comments.create);

    // Tüm ürünler 
    app.get('/api/comments', comments.findAll);

    // İd ile 1 tane ürün getir
    app.get('/api/comments/:id', comments.findById);

    // İd ile ürün Güncelle
    app.put('/api/comments', comments.update);

    // İd ile ürünü sil
    app.delete('/api/comments/:id', comments.delete);
};
