// ============================================================
// 苏教版初中数学复习工具 - Service Worker
// PWA 离线支持
// ============================================================

const CACHE_NAME = 'sujiaoban-math-v2.0';
const urlsToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/data.js',
  './js/quiz-data.js',
  './manifest.json'
];

// 安装事件 - 缓存资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('✅ 缓存已打开');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('✅ 资源缓存成功');
        return self.skipWaiting();
      })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ 删除旧缓存:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker 已激活');
      return self.clients.claim();
    })
  );
});

// 拦截请求 - 缓存优先，网络回退
self.addEventListener('fetch', event => {
  // 跳过非 GET 请求
  if (event.request.method !== 'GET') return;

  // 跳过外部资源
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // 返回缓存
          return cachedResponse;
        }
        
        // 缓存未命中，从网络获取
        return fetch(event.request)
          .then(response => {
            // 检查响应是否有效
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // 克隆响应
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(error => {
            // 网络失败，返回离线页面
            console.error('❌ 请求失败:', error);
            return caches.match('./index.html');
          });
      })
  );
});
