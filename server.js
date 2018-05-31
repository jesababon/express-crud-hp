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


// Rendering Houses
app.get('/hogwarts', (request, response) => {
  response.render('hogwarts/index');
});

// Rendering Houses
app.get('/houses', (request, response) => {
    Houses.all()
    .then(houses => {                
        response.render("houses/index.ejs", {houses: houses});
    }); 
});

//Rendering Students
app.get('/students', (request, response) => {
  Students.all().then(students => {
      response.render("students/index.ejs", {students:students});
    });
});


app.listen(PORT, () => {
  console.log(`Express server started on port ${PORT}`);
});

