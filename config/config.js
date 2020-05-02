const mongoose = require('mongoose');
const connection = process.env.DATABASE_URL;

const connectDb = () => mongoose.connect(
  connection || 'mongodb://localhost/portfolio',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
);

module.exports = { connectDb }