const homeRouter = require('./home')
const productRouter = require('./product')
const home2Router = require('./home2')
const home3Router = require('./home3')

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    })
    app.use('/home', homeRouter);
    app.use('/product', productRouter);
    app.use('/home2', home2Router);
    app.use('/home3', home3Router);
}

module.exports = route;
