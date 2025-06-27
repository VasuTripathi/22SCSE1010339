import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const URLForm = ({ onShorten }) => {
  const [input, setInput] = useState({
    longUrl: "",
    validity: "",
    shortcode: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!input.longUrl.startsWith("http")) {
      alert("Please enter a valid URL (must start with http/https)");
      return;
    }

    onShorten({
      longUrl: input.longUrl.trim(),
      validity: parseInt(input.validity) || 30,
      shortcode: input.shortcode.trim(),
    });

    setInput({ longUrl: "", validity: "", shortcode: "" });
  };

  return (
    <Box mt={3}>
      <TextField
        label="Long URL"
        name="longUrl"
        fullWidth
        margin="normal"
        value={input.longUrl}
        onChange={handleChange}
      />
      <TextField
        label="Custom Shortcode (Optional)"
        name="shortcode"
        fullWidth
        margin="normal"
        value={input.shortcode}
        onChange={handleChange}
      />
      <TextField
        label="Validity in Minutes (Optional)"
        name="validity"
        fullWidth
        margin="normal"
        value={input.validity}
        onChange={handleChange}
        type="number"
      />
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Shorten URL
      </Button>
    </Box>
  );
};

export default URLForm;
