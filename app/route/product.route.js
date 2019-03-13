module.exports = function (app) {
    const products = require('../controller/product.controller.js');

    // Yeni Ürün oluştur
    app.post('/api/products', products.create);

    // Tüm ürünler 
    app.get('/api/products', products.findAll);

    // İd ile 1 tane ürün getir
    app.get('/api/products/:id', products.findById);

    // İd ile ürün Güncelle
    app.put('/api/products', products.update);

    // İd ile ürünü sil
    app.delete('/api/products/:id', products.delete);
};
