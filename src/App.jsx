import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepositoryScreen from "./RepositoryScreen/RepositoryScreen.jsx";
import LoginScreen from "./LoginScreen/LoginScreen.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/repository" element={<RepositoryScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
