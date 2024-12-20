import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepositoryScreen from "./RepositoryScreen/RepositoryScreen";
import LoginScreen from "./LoginScreen/LoginScreen";
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
