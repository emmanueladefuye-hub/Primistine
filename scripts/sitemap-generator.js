import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Mock list of static routes
const routes = [
    '/',
    '/about',
    '/services',
    '/projects',
    '/blog',
    '/contact-us',
    '/calculators',
    '/calculators/solar-load',
    '/calculators/budget',
    '/calculators/safety',
];

// Mock list of dynamic blog posts (in a real scenario, fetch this from API)
// For now we will just use the hardcoded ones from our mock service logic
const blogSlugs = [
    'understanding-solar-load-calculations',
    'common-electrical-hazards-in-homes',
    'smart-home-wiring-basics'
];

const domain = 'https://primistine-web.vercel.app';

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
            .map((route) => {
                return `
  <url>
    <loc>${domain}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
            })
            .join('')}
  ${blogSlugs
            .map((slug) => {
                return `
  <url>
    <loc>${domain}/blog/${slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
            })
            .join('')}
</urlset>`;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    // Go up one level from scripts to root, then into public
    const publicDir = path.resolve(__dirname, '../public');

    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    const sitemapPath = path.join(publicDir, 'sitemap.xml');

    fs.writeFileSync(sitemapPath, sitemap);
    console.log(`✅ Sitemap generated at ${sitemapPath}`);
};

generateSitemap();
