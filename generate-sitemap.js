const fs = require('fs');
const path = require('path');
const DOMAIN = 'https://kilej.github.io/'; 
const OUTPUT_SITEMAP = path.join(__dirname, 'sitemap.xml');
const OUTPUT_ROBOTS = path.join(__dirname, 'robots.txt');
const pages = [
  '/',
  '/index.html'
];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://sitemaps.org">
${pages.map(page => `  <url>
    <loc>${DOMAIN}${page === '/' ? '' : page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
fs.writeFileSync(OUTPUT_SITEMAP, sitemapXml, 'utf-8');
console.log(`✅ Sukces! Wygenerowano plik sitemap.xml`);
const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${DOMAIN}/sitemap.xml`;
fs.writeFileSync(OUTPUT_ROBOTS, robotsTxt, 'utf-8');
console.log(`🎯 Sukces! Zaktualizowano robots.txt ze wskazaniem mapy strony.`);
