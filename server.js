const express = require('express');
const router = require('./routes/routes');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config();

// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => console.log('DB connection successfull'))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/tasks', router);
app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  console.log('server is running at the port 8000');
});
