/**
 * Bookmark creation and state management
 */

window.ChatMark = window.ChatMark || {};

window.ChatMark.bookmarkState = {
  selectedBookmarkText: '',
  selectedMessageId: null,
  selectedDataStart: null,
  selectedDataEnd: null
};

window.ChatMark.createBookmarkRecord = function(text, messageId, dataStart, dataEnd, parentId = null) {
  const sessionId = window.ChatMark.getSessionId();

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
