module.exports = (app) => {
    const books = require('../controllers/book.controller.js');

    // Create a new Book
    app.post('/books', books.create);
    // Get a single Book with bookId
    app.get('/books/:bookId', books.getById);


}
