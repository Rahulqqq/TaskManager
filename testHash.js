const bcrypt = require('bcryptjs');

(async () => {
  const enteredPassword = 'rahul@123'; // Your plaintext password
  const storedHashedPassword = '$2a$10$bKz0RvjrtKcd0Ew.Es8nWOAEUyBmRMPxGl581QAEbtO0TAXLsXLhW'; // The hashed password from the database

  // Check if the entered password matches the stored hashed password
  const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword);
  console.log('Password Match:', isMatch);
})();
