chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action_no_gmail" ) {
      chrome.tabs.create({"url": "https://mail.google.com/mail/ca/u/0/#inbox?compose=new"});
    }
    if( request.message === "clicked_browser_action_yes_gmail" ) {
      
    }
  }
);
