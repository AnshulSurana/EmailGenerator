import {onCLS, onFID, onLCP} from 'web-vitals';

// function sendToAnalytics(metric) {
//   const body = JSON.stringify(metric);
//   // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
//   (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
//     fetch('/analytics', {body, method: 'POST', keepalive: true});
// }

// logging web vitals for now, can also create an /analysis end point at the server site to persist metric report .
onCLS(console.log);
onFID(console.log);
onLCP(console.log);