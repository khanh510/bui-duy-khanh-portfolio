// NEXT_PUBLIC_SITE_URL is optional and should not include a trailing slash.
// Vercel supplies VERCEL_PROJECT_PRODUCTION_URL automatically during production builds.
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelProductionUrl
    ? `https://${vercelProductionUrl}`
    : "https://portfolio.example.com");
