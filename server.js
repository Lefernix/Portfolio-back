const express = require('express')

const port = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);



// LISTEN PORT
app.listen(port, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    }
    console.error(`Server is listening on ${port}`);
  });