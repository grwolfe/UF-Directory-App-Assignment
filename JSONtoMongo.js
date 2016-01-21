'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config'),
    listingData = require('./listings.json');

/* Connect to your database */
mongoose.connect(config.db.uri);
/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database

  Use the listings.forEach() method with callback function that will run for each entry in the array
 */

listingData.entries.forEach(function(value, index, entries) {
    var newListing = new Listing(
        {
            code: value.code,
            name: value.name,
            coordinates: value.coordinates || {},
            address: value.address || ''
        }).save( function(err) {
            if (err) throw err;
            console.log("Created new listing.");
        });
});

/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
