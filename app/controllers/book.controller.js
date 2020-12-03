const Book= require('../models/book.model.js');

// Create and Save a new Book
exports.create = (req, res) => {
    // Validate request because in model we required the title
    var data = {
        currency: "Cuenta guardada"
    }
    res.send(data);
};



// Get a single book with a bookId
exports.getById = (req, res) => {
    var data = {
        currency: 'USD',
        balance: 10,
        customer: "alguien"
    }
    res.send(data);
};
