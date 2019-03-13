module.exports = function (app) {
    const datas = require('../controller/data.controller.js');

    // Yeni Ürün oluştur
    app.post('/api/datas', datas.create);

    // Tüm ürünler 
    app.get('/api/datas', datas.findAll);

    // İd ile 1 tane ürün getir
    app.get('/api/datas/:id', datas.findById);

};
