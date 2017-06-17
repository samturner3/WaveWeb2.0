var PushBullet = require('pushbullet');
var pusher = new PushBullet('o.ZI389peEmcFSUIKkx6iKcGUXEhsU3Mwh');

const deviceParams = 'ujvFmS1iv8usjz8IpH3hXo';

// pusher.devices(function(error, response) {
// 	// response is the JSON response from the API
// });
//
// pusher.note(deviceParams, noteTitle, noteBody, function(error, response) {
// 	// response is the JSON response from the API
// });
module.exports = {
  sendNote(title, body, callback) {
    pusher.note(deviceParams, title, body, function(error, response) {
        callback(error, response);
    });
  }
};

// module.exports = pusher;
