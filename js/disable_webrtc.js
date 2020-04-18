// Disable WebRTC by default.
let isEnabled = false;
toggleWebRTC(isEnabled);

// Handle clicks on the action button.
browser.browserAction.onClicked.addListener(handleClick);

/**
 * Toggles WebRTC on and off.
 * @param {boolean=} enable
 */
function toggleWebRTC(enable = true) {
  // Update setting.
  browser.privacy.network.peerConnectionEnabled.set({ value: enable });
  browser.privacy.network.webRTCIPHandlingPolicy.set(
    { value: enable ? 'default' : 'disable_non_proxied_udp' });

  // Update title.
  const title = enable ?
    'WebRTC is NOT disabled. Be careful.' :
    'WebRTC is disabled.';
  browser.browserAction.setTitle({ title });

  // Update icon.
  const name = enable ? 'unsafe' : 'safe';
  const path = `images/${name}-64.png`;
  browser.browserAction.setIcon({ path });
}

/** Handles clicks on the action button. */
function handleClick() {
  isEnabled = !isEnabled;
  toggleWebRTC(isEnabled);
}
