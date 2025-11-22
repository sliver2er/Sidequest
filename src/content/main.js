/**
 * Main entry point - event binding and initialization
 */

(function() {
  'use strict';

  function handleDoubleClick(e) {
    const text = window.getSelection().toString().trim();
    if (!text) return;
    window.SideQuest.showBookmarkPopup(text, e.pageX, e.pageY, e);
  }

  function init() {
    document.addEventListener('dblclick', handleDoubleClick);
    console.log('SideQuest: Event listeners initialized');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
