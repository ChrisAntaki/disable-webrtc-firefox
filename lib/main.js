var preferences = require('sdk/preferences/service');

var enabled = false;
var key = 'media.peerconnection.enabled';

exports.main = enable;
function enable() {
    enabled = true;
    preferences.set(key, false);
}

exports.onUnload = disable;
function disable() {
    enabled = false;
    preferences.reset(key);
}

// Toggle Button
var { ActionButton } = require('sdk/ui/button/action');
var button = ActionButton({
    id: 'toggle',
    label: 'Toggle WebRTC',
    icon: './monkey-wr.png',
    onClick: onClick
});

function onClick() {
    if (enabled) {
        button.icon = './monkey-wr-bw.png';
        disable();
    } else {
        button.icon = './monkey-wr.png';
        enable();
    }
}
