/**
 * Helper function to get the correct path for public assets
 * Works in both development and production environments
 * @param {string} path - The path to the asset relative to the public folder
 * @returns {string} The complete path to the asset
 */
export const getPublicImagePath = (path) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;

  // Check if we're in development or production
  if (process.env.NODE_ENV === "development") {
    // Use relative path for development
    return `${process.env.PUBLIC_URL}/${cleanPath}`;
  } else {
    // Use absolute path for production
    return `https://textify-website.vercel.app/${cleanPath}`;
  }
};
