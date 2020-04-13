require('dotenv').config();
const express = require('express')

const { connectDb } = require('./config/config');
const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.static('public'));

// app.use('/api/v1/works', require('./api/works'));
// app.use('/send', require('./mail/index'));

// LISTEN PORT
app.listen(port, () => {
    console.log(`Listening on ${port}`);
    connectDb().then(() => {
      console.log('MongoDb connected');
    });
  });