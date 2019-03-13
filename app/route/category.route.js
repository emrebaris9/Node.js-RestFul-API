module.exports = function (app) {
    const categories = require('../controller/category.controller.js');
    // Tüm ürünler 
    app.get('/api/categories', categories.findAll);

    // İd ile 1 tane ürün getir
    app.get('/api/categories/:id', categories.findById);
};
