// Check if a URL entry is still valid
export const isUrlValid = (expiry) => {
  return new Date(expiry) > new Date();
};

// Get a random shortcode
export const generateShortcode = () => {
  return Math.random().toString(36).substring(2, 7);
};

// Get all valid URLs from localStorage
export const getValidUrls = () => {
  const all = JSON.parse(localStorage.getItem("shortUrls") || "[]");
  return all.filter((u) => isUrlValid(u.expiry));
};
