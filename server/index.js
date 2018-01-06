const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      placesBaseURL = '/api/places',
      placesController = require(__dirname + '/Controllers/PlacesController'),
      port          = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get(placesBaseURL, placesController.read);
app.post(placesBaseURL, placesController.create);

app.listen(port, console.log(`Ssssssssssssssssmokin on port ${port}`));