const mongoose = require('mongoose');

module.exports = mongoose.connect(
  'MONGODB_URL',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) console.log(`Error in DB connection ${err}`);
    console.log(`MongoDB Connection Successfull`);
  }
);
