module.exports = function(app) {
    app.get('/products/all', function(req, res, next) {
        console.log('In get all end point!');
        next();
    })

    app.get('/products/:id', function(req, res, next) {
        console.log('Get product with Id: ' + req.params.id);
        next('an error');
    })
}