/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config'),
    listingData = require('./listings.json');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
   Listing.find( { name : 'Library West' }, function(err, listing) {
       if (err) throw err;
       console.log(listing);
   });
};

var removeCable = function() {
   Listing.findOneAndRemove( { code: 'CABL' }, function(err, listing) {
       if (err) throw err;
       console.log('Listing removed.');
       console.log(listing);
   });
};

var updatePhelpsMemorial = function() {
   var phelpsAddress = '100 Museum Rd, Gainesville, FL 32611, United States';
   var coord = { latitude: 29.644825, longitude: -82.348895 };
   Listing.findOneAndUpdate( {code: 'PHL' }, { address: phelpsAddress, coordinates: coord }, function(err, listing) {
       if (err) throw err;
       console.log('Listing Updated.');
       console.log(listing);
   });
};

var retrieveAllListings = function() {
   Listing.find({}, function(err, listings) {
       if (err) throw err;
       console.log(listings);
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
