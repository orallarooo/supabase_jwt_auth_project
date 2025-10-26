import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

// pages 
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { ProtectedRoute } from "./pages/ProtectedRoute";

import { useAuthStore } from './assets/authStore'

// import Wrapper from "./pages/Wrapper";



export function App() {
  const { user } = useAuthStore()
  const checkSession = useAuthStore((s) => s.checkSession)

  useEffect(() => {
    checkSession()
  }, [])


  return (
    <Routes>

      {/* home */}
      <Route
        path="/"
        element={
          user ? <Navigate to="/dashboard" replace /> : <Home />
        }
      />

      {/* login */}
      <Route path="/register" element={<Register />} />

      {/* register */}
      <Route path="/login" element={<Login />} />

      {/* dashboard */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />

    </Routes>
  )
}