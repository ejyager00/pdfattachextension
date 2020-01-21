// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, url:"*://mail.google.com/*"}, function(tabs) {
    if (tabs.length >0) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"attempt": "clicked_browser_action_yes_gmail"});
    } else {
      chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"attempt": "clicked_browser_action_no_gmail"});
      });
    }
  });

});
