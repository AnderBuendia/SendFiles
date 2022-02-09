import { RC4Drop, enc } from 'crypto-js';

const SECRET_PASSWORD_KEY = import.meta.env.VITE_SECRET_PASSWORD_KEY;

export function hashPassword(password: string) {
  return String(RC4Drop.encrypt(password, `${SECRET_PASSWORD_KEY}`));
}

export function analysePassword(password: string, confirmPassword: string) {
  const bytes = RC4Drop.decrypt(password, `${SECRET_PASSWORD_KEY}`);
  const decryptedData = bytes.toString(enc.Utf8);

  return decryptedData === confirmPassword;
}
