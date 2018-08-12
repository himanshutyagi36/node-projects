const request = require('request');

var geocodeAddress = (address, callback) => {
    /**
     * callback is executed when we get the data back from the http request.
    */
    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to google servers', null);
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address', null);
        }
        else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
            
        }
    
    });
};
module.exports = {
    geocodeAddress
};