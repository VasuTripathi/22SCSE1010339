import React from "react";
import { Routes, Route } from "react-router-dom";
import ShortenerPage from "./pages/ShortenerPage";
import StatisticsPage from "./pages/StatisticsPage";
import RedirectHandler from "./components/RedirectHandler";
import { CssBaseline, Container } from "@mui/material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<ShortenerPage />} />
          <Route path="/stats" element={<StatisticsPage />} />
          <Route path="/:shortcode" element={<RedirectHandler />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
