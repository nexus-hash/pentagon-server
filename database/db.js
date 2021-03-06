const { MongoClient } = require("mongodb");
const URI = process.env.MONGODB_URI;

var client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;