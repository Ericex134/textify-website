/**
 * Helper function to get the correct path for public assets
 * Works in both development and production environments
 * @param {string} path - The path to the asset relative to the public folder
 * @returns {string} The complete path to the asset
 */
export const getPublicImagePath = (path) => {
  // For production, use a direct URL to the image
  return `https://textify-website.vercel.app/Assets/${path.replace(
    "Assets/",
    ""
  )}`;
};
