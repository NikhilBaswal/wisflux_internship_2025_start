//The node:path module provides utilities for working with file and directory paths. It can be accessed using:

const path = require('node:path');
console.log(path.basename('C:\\temp\\myfile.html'));
// Returns: 'C:\\temp\\myfile.html'
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
// Returns: 'quux.html'

console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));
// Returns: 'quux'
console.log(path.win32.basename('C:\\foo.html', '.html'));
// Returns: 'foo'

console.log(path.win32.basename('C:\\foo.HTML', '.html'));
// Returns: 'foo.HTML'
console.log(path.dirname('/foo/bar/baz/asdf/quux'));
// Returns: '/foo/bar/baz/asdf'