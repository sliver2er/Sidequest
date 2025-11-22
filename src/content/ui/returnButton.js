/**
 * Floating return button with tooltip
 */

window.SideQuest = window.SideQuest || {};

window.SideQuest.createReturnButton = function(bookmarkRecord) {
  window.SideQuest.removeReturnButton();

  const btn = document.createElement('div');
  btn.id = 'sidequest-return-btn';

  btn.innerHTML = `
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 2h12a1 1 0 0 1 1 1v19l-7-5-7 5V3a1 1 0 0 1 1-1z"/>
    </svg>
  `;

  btn.style.cssText = `
    position: fixed;
    bottom: 32px;
    right: 28px;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(8px);
    background: rgba(30, 30, 30, 0.55);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 50%;
    box-shadow: 0 6px 20px rgba(0,0,0,0.25), inset 0 0 8px rgba(255,255,255,0.05);
    cursor: pointer;
    z-index: 2147483647;
    transition: all 0.2s ease;
    user-select: none;
  `;

  const tooltip = document.createElement('div');
  tooltip.id = 'sidequest-tooltip';
  const truncatedText = bookmarkRecord.text.length > 50
    ? bookmarkRecord.text.substring(0, 50) + '...'
    : bookmarkRecord.text;
  tooltip.textContent = `Return to "${truncatedText}"`;

  tooltip.style.cssText = `
    position: fixed;
    bottom: 95px;
    right: 28px;
    padding: 8px 12px;
    background: rgba(30, 30, 30, 0.95);
    color: #f5f5f5;
    font-size: 13px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 2147483646;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    white-space: nowrap;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

  btn.addEventListener('mouseover', () => {
    btn.style.transform = 'scale(1.08)';
    btn.style.boxShadow = '0 8px 24px rgba(0,0,0,0.32)';
    tooltip.style.opacity = '1';
  });

  btn.addEventListener('mouseout', () => {
    btn.style.transform = 'scale(1)';
    btn.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25), inset 0 0 8px rgba(255,255,255,0.05)';
    tooltip.style.opacity = '0';
  });

  btn.addEventListener('click', () => {
    window.SideQuest.returnToBookmark(bookmarkRecord);
  });

  document.body.appendChild(btn);
  document.body.appendChild(tooltip);
};

window.SideQuest.removeReturnButton = function() {
  const btn = document.getElementById('sidequest-return-btn');
  const tooltip = document.getElementById('sidequest-tooltip');
  if (btn) btn.remove();
  if (tooltip) tooltip.remove();
};
