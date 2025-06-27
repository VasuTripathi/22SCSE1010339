import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import URLForm from "../components/URLForm";
import URLList from "../components/URLList";
import { logAction } from "../middleware/logger";
import { Button } from "@mui/material";

const ShortenerPage = () => {
  const [urls, setUrls] = useState(() => {
    // Load from localStorage
    const stored = localStorage.getItem("shortUrls");
    return stored ? JSON.parse(stored) : [];
  });
  const handleDelete = (shortcodeToDelete) => {
    const updated = urls.filter((u) => u.shortcode !== shortcodeToDelete);
    setUrls(updated);
    localStorage.setItem("shortUrls", JSON.stringify(updated));
  };

  const handleShorten = (urlObj) => {
    logAction("SHORTEN_URL", urlObj);

    const shortcode =
      urlObj.shortcode || Math.random().toString(36).substring(2, 7);
    const expiry = new Date(Date.now() + (urlObj.validity || 30) * 60000);
    const shortUrl = `http://localhost:5173/${shortcode}`;

    const newEntry = { ...urlObj, shortUrl, shortcode, expiry };
    const updatedUrls = [...urls, newEntry];
    setUrls(updatedUrls);
    localStorage.setItem("shortUrls", JSON.stringify(updatedUrls));
  };

  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        React URL Shortener
      </Typography>
      <URLForm onShorten={handleShorten} />
      <URLList urls={urls} onDelete={handleDelete} />
    </Box>
  );
};

export default ShortenerPage;
