chrome.runtime.onInstalled.addListener((details) => {
  // console.log(details);

  chrome.contextMenus.create({
    title: "Test Context menu",
    id: "contextMenu1",
    contexts: ["page", "selection"],
  });

  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);

    // chrome.search.query({
    //   disposition: "NEW_TAB",
    //   text: `imdb ${event.selectionText}`,
    // });

    // chrome.tabs.query(
    //   {
    //     currentWindow: true,
    //   },
    //   (tabs) => {
    //     console.log(tabs);
    //   }
    // );

    chrome.tabs.create({
      url: `https://www.imdb.com/find?q=${event.selectionText}&ref_=nv_sr_sm`,
    });
  });

  // chrome.contextMenus.create({
  //   title: "Test Context menu 1",
  //   id: "contextMenu2",
  //   parentId: "contextMenu1",
  //   contexts: ["page", "selection"],
  // });

  // chrome.contextMenus.create({
  //   title: "Test Context menu 2",
  //   id: "contextMenu3",
  //   parentId: "contextMenu1",
  //   contexts: ["page", "selection"],
  // });
});

// chrome.storage.local.get(["text"], (res) => {
//   console.log(res);
// });

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  console.log(sender);
  sendResponse("recived message from background!");
  chrome.tabs.sendMessage(sender.tab.id, "Got your message from background!");
});
