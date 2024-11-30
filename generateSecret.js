const crypto = require('crypto');  // Load the crypto module

// Generate a random 64-byte secret key and convert it to hexadecimal
const secretKey = crypto.randomBytes(64).toString('hex');

// Print the generated secret key to the console
console.log('Generated JWT Secret Key:', secretKey);
