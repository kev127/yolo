var config = {}

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
} = process.env;

config.mongoURI = {
    production: process.env.MONGO_DB_PROD_URI,
    development: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:27017/yolo?authSource=admin`,
    test: process.env.MONGO_DB_TEST_URI,
  };
  module.exports = config;
  Footer
  