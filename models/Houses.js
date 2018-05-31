const db = require('../db/connection'); //are we linking our functions to db connection?

const Houses = {}; //we're making objects up in here


Houses.all= function (){
    return db.any('SELECT * FROM houses');
};

Houses.all().then(houses => {
    // console.log(houses);
  return houses;
});

// console.log('Houses.js connected'); //locked and loaded
 
module.exports = Houses; //export this stuff so we can use it in our server file.
