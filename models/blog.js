const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema is a structure
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true });

// name of the model is Captial letter Here Blog
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
