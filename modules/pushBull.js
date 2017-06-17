var PushBullet = require('pushbullet');
var pusher = new PushBullet(process.env.PUSHBULLET_API_KEY);

const deviceParams = process.env.PUSHBULLET_DEVICE_PARAMS;

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
