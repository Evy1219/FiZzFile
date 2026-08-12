(function() {
  if (typeof jsQR === 'function' || typeof window.jsQR === 'function') return;
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js';
  script.async = false;
  script.onerror = function() {
    console.warn('vendor/jsQR.js loader could not fetch jsQR from CDN.');
  };
  document.head.appendChild(script);
})();
