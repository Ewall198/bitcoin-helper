import React from "react";
import { Routes, Route } from "react-router-dom";
import TransactionsPage from "./components/TransactionsPage";
import HomePage from "./components/HomePage";

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="transactions" element={<TransactionsPage />} />
  </Routes>
);

export default App;
