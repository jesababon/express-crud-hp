const promise = require("bluebird"); //this lil bluebird is a package that  
const monitor = require("pg-monitor");

promise.config({
  longStackTraces: true
});

const initOptions = {
  promiseLib: promise
};

monitor.attach(initOptions, ["query", "error"]);

const pgp = require('pg-promise')(initOptions);

const connection = "postgres://localhost:5432/hogwarts_crud";


const db = pgp(connection);

console.log('connection on');

module.exports = db;
