/**
 * LocalStorage  data creation and state management
 */

const STORAGE_KEY = "sidequestBookmarks";

function loadAll() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

export function saveBookmark(sessionId, bookmark) {
  const all = loadAll();
  all[sessionId] = bookmark;     
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function loadBookmark(sessionId) {
  const all = loadAll();
  return all[sessionId] || null;
}

export function removeBookmark(sessionId) {
  const all = loadAll();
  if (all[sessionId]) {
    delete all[sessionId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  }
}

