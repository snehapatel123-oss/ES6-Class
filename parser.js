var parser = require('xml-js');

const xml = require('fs').readFileSync('junit.xml', 'utf-8');

const options = {compact: true, ignoreComment: true, spaces: 4};

const result = parser.xml2json(xml, options)

const parsedResult = JSON.stringify(result, '');

console.log(parsedResult);
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Sec
