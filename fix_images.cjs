const fs = require('fs');

const replacements = {
    '1544724569-5f546fd6f2b6': '1621905251189-08b45d6a269e',
    '1614083656113-6d0426f588aa': '1621905251189-08b45d6a269e',
    '1631557008779-7dddbfac23da': '1581091226825-a6a2a5aee158',
    '1545620958-3d120a174dfb': '1621905252507-b35492cc74b4',
    '1585822765363-2287c2fb2bf3': '1527689638836-411945a2b57c',
    '1585704033320-c11f71a78af0': '1584622650111-993a426fbf0a',
    '1595846519845-68e298c2cebc': '1604014237800-1c9102c219da',
    '1534065476313-8d070b4a4cb3': '1589939705384-5185137a7f0f',
    '1581428982868-e410dd4bfd58': '1505843490538-5133c6c7d0e1',
    '1523413555809-0fbac94a0808': '1502005229762-cf1b2da7c5d6',
    '1510006764491-a1288ed3b7cb': '1552566626-52f8b828add9',
    '1504307651254-35680f356bfd': '1556910103-1c02745aae4d',
    '1572043690412-1678f134ee0b': '1493663284031-b7e3aefcae8e',
    '1595147395015-ab28a2a7a4cb': '1538688525198-9b88f6f53126',
    '1600607688969-a5bfcd64bd40': '1503387762-592deb58ef4e'
};

const files = ['src/pages/ServiceDetail.jsx', 'src/pages/Services.jsx', 'src/pages/Home.jsx'];

files.forEach(f => {
    let text = fs.readFileSync(f, 'utf-8');
    for (let [bad, good] of Object.entries(replacements)) {
        text = text.split(bad).join(good);
    }
    fs.writeFileSync(f, text);
});

console.log('Fixed broken images');
