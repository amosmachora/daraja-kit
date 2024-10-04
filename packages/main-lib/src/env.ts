export const ENVIRONMENT = assertValue(
  process.env.ENVIRONMENT,
  "Missing environment variable: ENVIRONMENT"
);

export const BASE_URL =
  ENVIRONMENT === "production"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";

export const CONSUMER_KEY = assertValue(
  process.env.MPESA_CONSUMER_KEY,
  "Missing environment variable: MPESA_CONSUMER_KEY"
);

export const CONSUMER_SECRET = assertValue(
  process.env.MPESA_CONSUMER_SECRET,
  "Missing environment variable: MPESA_CONSUMER_SECRET"
);

export const BUSINESS_SHORT_CODE = assertValue(
  process.env.MPESA_BUSINESS_SHORT_CODE,
  "Missing environment variable: MPESA_BUSINESS_SHORT_CODE"
);

export const MPESA_TRANSACTION_TYPE = assertValue(
  process.env.MPESA_TRANSACTION_TYPE,
  "Missing environment variable: MPESA_TRANSACTION_TYPE"
);

export const PASSKEY = assertValue(
  process.env.MPESA_API_PASS_KEY,
  "Missing environment variable: PASSKEY"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
