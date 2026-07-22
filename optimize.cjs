const fs = require('fs');
const path = require('path');

const filesToOptimize = [
    'src/pages/Home.jsx',
    'src/pages/Services.jsx',
    'src/pages/ServiceDetail.jsx',
    'generate_services.cjs'
];

filesToOptimize.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');

        // 1. Optimize Unsplash images (reduce quality to 60 and cap width to 800px)
        content = content.replace(/q=80/g, 'q=60&w=800');

        // 2. Add loading="lazy" to all img tags avoiding duplicates
        // Using a regex that finds <img strictly without loading="lazy"
        content = content.replace(/<img(?!.*?loading=["']lazy["']).*?src=/g, (match) => {
            return match.replace('<img ', '<img loading="lazy" ');
        });

        fs.writeFileSync(filePath, content);
        console.log(`Optimized ${file}`);
    } else {
        console.log(`File not found: ${file}`);
    }
});
