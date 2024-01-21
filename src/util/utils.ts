import { BUSINESS_SHORT_CODE, PASSKEY } from "../env";

/**
 * Generates a timestamp in the format of YEAR+MONTH+DATE+HOUR+MINUTE+SECOND (YYYYMMDDHHMMSS).
 * @returns {string} Timestamp in the specified format.
 * @example generateTimestamp(); // Returns "20230926124530" (for September 26, 2023, 12:45:30)
 */
export function generateTimestamp(): string {
  const now = new Date();
  const year = now.getFullYear().toString().padStart(4, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const date = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  return `${year}${month}${date}${hours}${minutes}${seconds}`;
}

export const generatePassword = (): string => {
  const businessShortCode = BUSINESS_SHORT_CODE;
  const passkey = PASSKEY;

  const timestamp = generateTimestamp();

  const concatenatedString = `${businessShortCode}${passkey}${timestamp}`;

  // Check if the environment is Node.js
  if (typeof btoa === "undefined") {
    // Node.js environment
    const encodedString = Buffer.from(concatenatedString).toString("base64");
    return encodedString;
  } else {
    // Browser environment
    const encodedString = btoa(concatenatedString);
    return encodedString;
  }
};
