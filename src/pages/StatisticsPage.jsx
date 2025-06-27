import React from "react";
import { Typography, Box, Paper } from "@mui/material";

const StatisticsPage = () => {
  const urls = JSON.parse(localStorage.getItem("shortUrls") || "[]");

  return (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom>
        URL Statistics
      </Typography>

      {urls.length === 0 && (
        <Typography variant="body1" color="text.secondary">
          No shortened URLs found.
        </Typography>
      )}

      {urls.map((url, index) => (
        <Paper key={index} sx={{ p: 2, my: 2 }} elevation={2}>
          <Typography>
            <strong>Short URL:</strong> {url.shortUrl}
          </Typography>
          <Typography>
            <strong>Original:</strong> {url.longUrl}
          </Typography>
          <Typography>
            <strong>Expires at:</strong> {new Date(url.expiry).toLocaleString()}
          </Typography>
          <Typography>
            <strong>Clicks:</strong> 0
          </Typography>{" "}
          {/* Placeholder */}
        </Paper>
      ))}
    </Box>
  );
};

export default StatisticsPage;
