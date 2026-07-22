const fs = require('fs');
const files = ['src/pages/ServiceDetail.jsx', 'src/pages/Home.jsx', 'src/components/WhatsAppButton.jsx', 'src/components/Footer.jsx'];
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf-8');
    content = content.split('9752993382').join('97152993382');
    fs.writeFileSync(f, content);
});
console.log('Updated numbers to 97152993382');
