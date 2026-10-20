// Tiny static server: `node server.js` then open http://localhost:5173 (or your PC's LAN IP on the phone).
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os');
const PORT = process.env.PORT || 5173;
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json', '.json': 'application/json' };

http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p === '/') p = '/index.html';
  const file = path.join(__dirname, path.normalize(p));
  if (!file.startsWith(__dirname)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Nocturne running at http://localhost:${PORT}`);
  for (const ni of Object.values(os.networkInterfaces()).flat())
    if (ni.family === 'IPv4' && !ni.internal) console.log(`  on your phone (same Wi-Fi): http://${ni.address}:${PORT}`);
});
