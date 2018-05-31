const express = require("express");
const bodyParser = require('body-parser');
const Houses = require('./models/Houses');
const Students = require('./models/Students');
const methodOverride = require("method-override");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.set('view engine', 'ejs');

app.use('/client', express.static("client"));


//Rendering Houses
app.get('/hogwarts', (request, response) => {
    Houses.all()
    .then(house => {                
        response.render('hogwarts/index', {house: house});
    }); 
});

app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}`);
});

