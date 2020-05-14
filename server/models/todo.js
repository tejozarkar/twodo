
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    description: String,
    dueDate: String,
    status: String,
    label: String
});

module.exports = mongoose.model('todo', todoSchema, 'todos');