const { execSync } = require('child_process');
const fs = require('fs');

try {
  console.log('Running tests...');
  const output = execSync('npm test', { encoding: 'utf8' });
  console.log('Tests completed. Saving results...');
  fs.writeFileSync('test_results.txt', output);
  console.log('Results saved to test_results.txt');
} catch (error) {
  console.error('Error running tests:', error.message);
  if (error.stdout) {
    console.log('Test output:', error.stdout);
    fs.writeFileSync('test_results.txt', error.stdout);
    console.log('Results saved to test_results.txt');
  }
} 