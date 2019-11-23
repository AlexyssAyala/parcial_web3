const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  marca: String,
  precio: Number,
  material: String,
  tipo: String
});

module.exports = mongoose.model('task', TaskSchema);
