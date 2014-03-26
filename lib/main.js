var preferences = require("sdk/preferences/service");

exports.main = function() {
    preferences.set('media.peerconnection.enabled', false);
}

exports.onUnload = function() {
    preferences.reset('media.peerconnection.enabled');
}
