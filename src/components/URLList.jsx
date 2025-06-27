import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const URLList = ({ urls, onDelete }) => {
  return (
    <Stack spacing={2} mt={4}>
      {urls.length === 0 && (
        <Typography variant="body1" align="center">
          No URLs available.
        </Typography>
      )}

      {urls.map((url, index) => (
        <Card key={index} variant="outlined">
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Typography
                variant="body1"
                component="a"
                href={url.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  textDecoration: "none",
                  color: "primary.main",
                  fontWeight: "bold",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                🔗 {url.shortUrl}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  wordBreak: "break-all",
                  maxWidth: "100%",
                  whiteSpace: "normal",
                  overflowWrap: "break-word",
                }}
              >
                → {url.longUrl}
              </Typography>

              <Typography variant="caption" color="error">
                Expires: {new Date(url.expiry).toLocaleString()}
              </Typography>
            </div>

            <IconButton onClick={() => onDelete(url.shortcode)} color="error">
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default URLList;
