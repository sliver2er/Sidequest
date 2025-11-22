/**
 * Bookmark creation and state management
 */

window.SideQuest = window.SideQuest || {};

window.SideQuest.bookmarkState = {
  selectedBookmarkText: '',
  selectedMessageId: null,
  selectedDataStart: null,
  selectedDataEnd: null
};

window.SideQuest.createBookmarkRecord = function(text, messageId, dataStart, dataEnd, parentId = null) {
  const sessionId = window.SideQuest.getSessionId();

  return {
    id: Date.now().toString() + Math.random().toString(36).substring(2, 11),
    sessionId: sessionId,
    text: text,
    messageId: messageId,
    dataStart: dataStart,
    dataEnd: dataEnd,
    timestamp: Date.now(),
    parentId: parentId
  };
};
