# SideQuest - LLM Bookmark

This repository is a chrome extension for those who use LLM as their tutor.

sidequest-extension/
├── manifest.json
├── package.json
├── README.md
│
├── src/
│   ├── content/
│   │   ├── content-script.js      # ChatGPT DOM 감시 + 더블클릭 감지 + UI 삽입
│   │   ├── bookmark.js            # 북마크 생성/삭제/로드 함수
│   │   ├── inject-ui.js           # 북마크 플로팅 버튼 / 사이드팝업 UI 생성
│   │   ├── auto-send.js           # ChatGPT 입력창 자동 입력 + 전송 로직
│   │   ├── style.css              # 모든 UI 스타일
│   │   └── utils/
│   │       ├── dom.js             # DOM selector, 요소 탐색 등
│   │       ├── storage.js         # localStorage wrapper
│   │       └── session.js         # 세션 ID(대화 ID) 파싱
│   │
│   ├── background/
│   │   └── service-worker.js      # 필요 시 사용 (MVP는 비워도 됨)
│   │
│   ├── popup/
│   │   ├── popup.html
│   │   ├── popup.js
│   │   └── popup.css
│   │
│   └── assets/
│       ├── icons/
│       │   ├── icon16.png
│       │   ├── icon48.png
│       │   └── icon128.png
│       └── logo.png
