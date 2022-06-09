require ('dotenv').config();
const path = require('path')

const {
  DB_HOST,
  DB_PASSWORD,
  DB_USERNAME,
  DB_NAME,
  DB_PORT
} = process.env;

module.exports= {
  rootPath : path.resolve(__dirname, '..'),
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "mysql",
    "port": DB_PORT 
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "mysql",
    "port": DB_PORT
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "dialect": "mysql",
    "port": DB_PORT
  }
}
