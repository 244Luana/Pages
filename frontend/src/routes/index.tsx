import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthProvider";
import { useAuth } from "../hooks/useAuth";

import Home from "../pages/Home";
import { Login } from "../pages/Login";
import { Signin } from "../pages/Signin";
import { ForgotPassword } from "../pages/ForgotPassword";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return <div>Carregando autenticação...</div>;
  }

  return currentUser ? (children) : <Navigate to="/login" replace />;
}

export function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/myprofile" element={<ForgotPassword />} />
          <Route path="/reviews" element={<ForgotPassword />} />

          <Route path="*" element={<div>404 - Página não encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}