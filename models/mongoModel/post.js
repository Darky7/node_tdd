const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let PostSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author:{type: Schema.Types.ObjectId, ref: 'Author'},
      
});

// Export the model
module.exports = mongoose.model('Post', PostSchema);