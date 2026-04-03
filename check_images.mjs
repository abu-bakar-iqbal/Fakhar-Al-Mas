import fs from 'fs';

const content = fs.readFileSync('src/pages/ServiceDetail.jsx', 'utf-8');
const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^\s'"]*/g;
const matches = [...new Set(content.match(regex))];

async function checkUrls() {
    const broken = [];
    console.log(`Checking ${matches.length} unique URLs...`);
    for (let url of matches) {
        try {
            const res = await fetch(url.replace('&amp;', '&'), { method: 'HEAD' });
            if (!res.ok) {
                broken.push(url);
            }
        } catch (e) {
            broken.push(url);
        }
    }
    console.log('Broken URLs:');
    console.log(broken.join('\n'));
}
checkUrls();
