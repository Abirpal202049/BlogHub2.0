import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AutorPage from "./pages/AutorPage";
import HomePage from "./pages/HomePage";
import SingleAuthor from "./pages/SingleAuthor";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="author">
          <Route path=":authSlug" element={<SingleAuthor />} />
          <Route path="allAuthor" element={<AutorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
