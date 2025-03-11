console.log('Testing Node.js script execution');
console.log('Current directory:', process.cwd());
console.log('Files in directory:');
const fs = require('fs');
fs.readdirSync('.').forEach(file => {
  console.log('  - ' + file);
}); 