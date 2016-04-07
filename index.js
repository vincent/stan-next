'use strict';

var cheerio = require('cheerio');
var request = require('request');

var lines   = require('./lines');
var stops   = require('./stops');

module.exports = {

  next: function (line, stop, sens, callback) {

  console.log('fetching', nextStopsUrl(line, stop, sens));


    request(nextStopsUrl(line, stop, sens), function (error, response, body) {
      callback(null, cheerio.load(body)('#monitoringHour ul li span').first().text());
    });
  },

};

function nextStopsUrl(line, stop, sens) {
  var l = lines[line];
  var s = stops[stop];
  return 'http://mob.reseau-stan.com/horaires/index.asp?rub_code=6&sens='+sens+'&nexthours=1&stopPoint='+s+'&lign_id='+l;
}
