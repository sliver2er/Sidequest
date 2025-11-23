/**
 * LocalStorage management for bookmarks
 */

window.ChatMark = window.ChatMark || {};

const STORAGE_KEY = "ChatMarkBookmarks";

window.ChatMark.loadBookmarks = function() {
  const bookmarks = localStorage.getItem(STORAGE_KEY);
  return bookmarks ? JSON.parse(bookmarks) : {};
};

window.ChatMark.saveBookmark = function(sessionId, bookmark) {
  const bookmarks = window.ChatMark.loadBookmarks();
  bookmarks[sessionId] = bookmark;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
};

window.ChatMark.loadBookmark = function(sessionId) {
  const bookmarks = window.ChatMark.loadBookmarks();
  return bookmarks[sessionId] || null;
};

window.ChatMark.removeBookmark = function(sessionId) {
  const bookmarks = window.ChatMark.loadBookmarks();
  if (bookmarks[sessionId]) {
    delete bookmarks[sessionId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  }
};