const fs = require('fs');
const path = require('path');

// Retrieve API_URL from environment variables
const apiUrl = process.env.API_URL;

if (!apiUrl) {
  console.error("ERROR: API_URL is not set!");
  process.exit(1); // Exit the script with an error
}

console.log(`Environment variable API_URL set to: ${apiUrl}`);

// List of environment files to be updated
const envFiles = [
  'src/environments/environment.ts',
  'src/environments/environment.development.ts'
];

envFiles.forEach((envFile) => {
  const environmentPath = path.join(__dirname, envFile);

  if (fs.existsSync(environmentPath)) {
    let fileContent = fs.readFileSync(environmentPath, 'utf8');

    // Replace the existing apiUrl value with the new API_URL
    fileContent = fileContent.replace(/apiUrl: '.*'/, `apiUrl: '${apiUrl}'`);

    // Save the updated file
    fs.writeFileSync(environmentPath, fileContent, 'utf8');

    console.log(`${envFile} has been updated with API_URL=${apiUrl}`);
  } else {
    console.warn(`WARNING: ${envFile} does not exist and was skipped.`);
  }
});

