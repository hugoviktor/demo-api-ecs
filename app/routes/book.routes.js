module.exports = (app) => {
    const books = require('../controllers/book.controller.js');

    // Create a new Book
    app.post('/accounts', books.create);
    // Get a single Book with bookId
    app.get('/accounts/:bookId', books.getById);


}
