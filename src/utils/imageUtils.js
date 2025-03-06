/**
 * Helper function to get the correct path for public assets
 * Works in both development and production environments
 * @param {string} path - The path to the asset relative to the public folder
 * @returns {string} The complete path to the asset
 */
export const getPublicImagePath = (path) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  return `${process.env.PUBLIC_URL}/${cleanPath}`;
};
