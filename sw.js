// Service Worker Dummy (Hanya untuk memancing Chrome WebAPK)
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Terinstal');
});

self.addEventListener('fetch', (e) => {
  // Biarkan kosong karena konten asli ada di dalam Iframe Google Apps Script
});