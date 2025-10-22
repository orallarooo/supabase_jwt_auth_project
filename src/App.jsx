import React from "react";
import { Routes, Route } from "react-router-dom";

// pages 
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";

import Wrapper from "./pages/Wrapper";



export function App() {
  return (
    <Routes>
      {/* home */}
      <Route path="/" element={<Home />} />

      {/* login */}
      <Route path="/register" element={<Register />} />

      {/* register */}
      <Route path="/login" element={<Login />} />

      {/* dashboard */}
      <Route path="/dashboard" element={
        <Wrapper>
          <Dashboard />
        </Wrapper>
      } />

    </Routes>
  )
}