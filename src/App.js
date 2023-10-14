import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./Dice-Game";

const App = () => (
  <BrowserRouter basename="/personal-mini-projects/dice-game">
    <Routes>
      <Route path="/" element={<Game />} />
    </Routes>
  </BrowserRouter>
);

export default App;
