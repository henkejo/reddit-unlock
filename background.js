chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query(
    {
        active: true,
        lastFocusedWindow: true
    },
    tabs => {
        let url = tabs[0].url;
        chrome.tabs.update({url: "https://web.archive.org/web/" + url});
    }
  )
});