// password generator
import generatePassword from "password-generator";

function generateRandomPassword() {
  // Generate a password of length 16 (non-memorable)
  const password = generatePassword(16, false, /[\w\d\!\@\#\$]/);
  console.log(`Generated Password: ${password}`);
}

generateRandomPassword();
