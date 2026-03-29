// sw.js - 기본 서비스 워커
self.addEventListener('install', (p) => {
  console.log('서비스 워커 설치 완료!');
});

self.addEventListener('fetch', (e) => {
  // 앱 실행을 위한 기본 네트워크 요청 허용
});