Secure WebRTC, for Firefox
========================

[Install here](https://addons.mozilla.org/en-US/firefox/addon/happy-bonobo-disable-webrtc/)

WebRTC is a communication protocol that relies on JavaScript that can leak your actual IP address from behind your VPN... by default. This addon fixes that, making VPNs more effective [1].

[1] https://www.privacytools.io/webrtc.html (Please note, the text on that page is still a little outdated, since it was written before a new Firefox setting allowed WebRTC to run without leaking your IPs from behind VPNs. The setting is "media.peerconnection.ice.default_address_only", and you can read more about it here: https://wiki.mozilla.org/Media/WebRTC/Privacy)
