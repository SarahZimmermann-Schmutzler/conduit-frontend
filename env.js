const fs = require('fs');
const path = require('path');

// Retrieve API_URL from environment variables
const apiUrl = process.env.API_URL;

// environment files to be updated
const environmentPath_ts = path.join(__dirname, 'src/environments/environment.ts');
const environmentPath_dev = path.join(__dirname, 'src/environments/environment.development.ts');

console.log(`Environment variable API_URL from .env-file set to: ${apiUrl}`);

let fileContent_ts = fs.readFileSync(environmentPath_ts, 'utf8');
let fileContent_dev = fs.readFileSync(environmentPath_dev, 'utf8');

// Replace the existing apiUrl value with the new API_URL
fileContent_ts = fileContent_ts.replace(/apiUrl: '.*'/, `apiUrl: '${apiUrl}'`);
fileContent_dev = fileContent_dev.replace(/apiUrl: '.*'/, `apiUrl: '${apiUrl}'`);

// Save the updated file
fs.writeFileSync(environmentPath_ts, fileContent_ts, 'utf8');
fs.writeFileSync(environmentPath_dev, fileContent_dev, 'utf8');
