const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.error(errorMessage);
    }
    else {
        console.log(JSON.stringify(results, undefined, 2));
    }
}); 


// aaa90b217101ec24ea4a64410d784afe

const request = require('request');
request({
    url: `https://api.darksky.net/forecast/aaa90b217101ec24ea4a64410d784afe/35.8835242,-78.8260906`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log(`Current weather: ${body.currently.temperature}`);
        }
        else {
            console.log('Unable to fetch weather');
        }
        
});