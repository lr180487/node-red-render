const fs = require('node:fs');
const assert = require('node:assert/strict');

assert.ok(fs.existsSync('package.json'), 'package.json debe existir');
assert.ok(fs.existsSync('settings.js'), 'settings.js debe existir');
const pkg = require('../package.json');
assert.equal(pkg.dependencies['node-red'], '5.0.10');
console.log('OK: estructura básica y dependencia Node-RED 5.0.10');
