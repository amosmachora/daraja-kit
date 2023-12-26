export const ENVIRONMENT = assertValue(
  process.env.NODE_ENV,
  "Missing environment variable: NODE_ENV"
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
  process.env.BUSINESS_SHORT_CODE,
  "Missing environment variable: BUSINESS_SHORT_CODE"
);

export const PRODUCTION_PASS_KEY =
  ENVIRONMENT === "production"
    ? assertValue(
        process.env.PRODUCTION_PASS_KEY,
        "Missing environment variable: PRODUCTION_PASS_KEY"
      )
    : null;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
