function openSideQuestPopup(selectedText = "") {
  const popupUrl = chrome.runtime.getURL("src/components/popup.html");

  const features = "width=380,height=420,top=100,left=100";
  const popup = window.open(popupUrl, "_blank", features);
  popup.onload = () => {
    popup.postMessage(
      { type: "SIDEQUEST_SELECTED_TEXT", text: selectedText },
      "*"
    );
  };
}

document.addEventListener("dblclick", (event) => {
  const selectedText = window.getSelection().toString().trim();
  if (!selectedText) return;
  console.log("[SideQuest] Double-click detected:", selectedText);
  openSideQuestPopup(selectedText);
});
