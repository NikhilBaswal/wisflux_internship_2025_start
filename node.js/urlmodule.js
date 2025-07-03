//The node:url module provides utilities for URL resolution and parsing. It can be accessed using:

import url from 'node:url';
const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL)
console.log(myURL.hash)
console.log(myURL.host)
console.log(myURL.href)
console.log(myURL.pathname)