const mongoose = require('mongoose');
// database related plumbing
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;
const dbPath = `mongodb://${dbuser}:${dbpassword}@ds111050.mlab.com:11050/house_cup_db`;

mongoose.Promise = global.Promise;

mongoose
  .connect(dbPath)
  .then(() => {
    console.log('database is connected sucessfully');
  })
  .catch(() => {
    console.log('Database connection failed');
  });
