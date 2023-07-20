import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Rdv from "../pages/Rdv";
import Contact from "../pages/Contact";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/rdv" element={<Rdv />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Router;
