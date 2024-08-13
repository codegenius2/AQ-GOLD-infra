/**
 * Validates if a string is a valid email address.
 * @param email - The email string to validate.
 * @returns True if the email is valid, false otherwise.
 */
export function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

/**
 * Validates if a string meets the minimum password criteria.
 * @param password - The password string to validate.
 * @returns True if the password meets the criteria, false otherwise.
 */
export function isValidPassword(password: string): boolean {
  // Example: Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character.
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return re.test(password);
}

/**
 * Validates if a video file size is within the allowed limit.
 * @param fileSize - The size of the video file in bytes.
 * @param maxSizeInMB - The maximum allowed size in megabytes.
 * @returns True if the file size is within the limit, false otherwise.
 */
export function isValidVideoFileSize(fileSize: number, maxSizeInMB: number): boolean {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return fileSize <= maxSizeInBytes;
}

/**
 * Validates if a video file format is supported.
 * @param fileName - The name of the video file.
 * @returns True if the file format is supported, false otherwise.
 */
export function isValidVideoFormat(fileName: string): boolean {
  const supportedFormats = ['mp4', 'mov', 'avi', 'mkv'];
  const fileExtension = fileName.split('.').pop()?.toLowerCase();
  return supportedFormats.includes(fileExtension || '');
}

/**
 * Validates if a string is not empty and does not exceed a specified length.
 * @param text - The string to validate.
 * @param maxLength - The maximum allowed length of the string.
 * @returns True if the string is valid, false otherwise.
 */
export function isValidText(text: string, maxLength: number = 255): boolean {
  return text.trim().length > 0 && text.trim().length <= maxLength;
}
