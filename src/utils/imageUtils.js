/**
 * Helper function to get the correct path for public assets
 * Works in both development and production environments
 * @param {string} path - The path to the asset relative to the public folder
 * @returns {string} The complete path to the asset
 */
export const getPublicImagePath = (path) => {
  // Extract just the filename from the path
  const filename = path.split("/").pop();

  // Check if we're in development or production
  if (process.env.NODE_ENV === "development") {
    // For local development, use the assets from src/assets
    try {
      // Use require to get the webpack-processed path
      return require(`../assets/${filename}`);
    } catch (e) {
      console.error(`Failed to load image: ${filename}`, e);
      return `/assets/${filename}`;
    }
  } else {
    // For production
    try {
      // Try to use the webpack-processed path
      return require(`../assets/${filename}`);
    } catch (e) {
      // Fallback to direct URL
      return `https://textify-website.vercel.app/assets/${filename}`;
    }
  }
};
