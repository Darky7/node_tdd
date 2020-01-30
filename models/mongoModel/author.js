const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let AuthorSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
});

// Export the model
module.exports = mongoose.model('Author', AuthorSchema);