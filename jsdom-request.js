'use strict';
let request = require('request'),
    jsdom = require('jsdom');

request({ uri:'http://github.com/octocat' }, function (error, response, body) {  
  if (error && response.statusCode !== 200) {
    console.log('Error when contacting google.com')
  }

  jsdom.env({
    html: body,
    scripts: [
      'http://code.jquery.com/jquery-1.5.min.js'
    ],
    done: function (err, window) {
    let $ = window.jQuery;
    
    // jQuery is now loaded on the jsdom window created from 'agent.body'
    console.log($('.vcard-avatar').html());
  }});
});