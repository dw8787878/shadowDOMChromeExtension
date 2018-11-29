/*

browser.contextMenus.create({
    id: "log-selection",
    title: browser.i18n.getMessage("contextMenuItemSelectionLogger"),
    contexts: ["selection"]
  }, onCreated);

browser.contextMenus.onClicked.addListener(function(info, tab) {
    switch (info.menuItemId) {
      case "log-selection":
        console.log(info.selectionText);
        break;
    }
  })

  */

function main(){
  // monitorEvents(document.body, "click");
  // let clickEvents = getEventListeners(document);
  // console.log("this is clickEvents:", clickEvents);
  alert("hello");
}

chrome.contextMenus.create({
  title: "Shadow DOM - Get XPath",
  contexts: ["all"],
  onclick : main
})

//chrome.contextMenus.onClicked.addListener()
