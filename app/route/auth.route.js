module.exports = function (app) {
    const auths = require('../controller/auth.controller.js');

    // Yeni Ürün oluştur
    app.post('/api/auths', auths.create);

    // Tüm ürünler 
    app.get('/api/auths', auths.findAll);

    // İd ile 1 tane ürün getir
    app.get('/api/auths/:id', auths.findById);

};
