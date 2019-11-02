const https = require('https');


module.exports = {
  keepAlive () {
    setInterval(function() {
      https.get('https://nerez-bot.herokuapp.com/', function(res) {
        res.on('data', function(chunk) {
          try {
            // optional logging... disable after it's working
            console.log("HEROKU RESPONSE: " + chunk);
          } catch (err) {
            console.log(err.message);
          }
        });
      }).on('error', function(err) {
        console.log("Error: " + err.message);
      });
    }, 20 * 60 * 1000); // load every 20 minutes
  }
};