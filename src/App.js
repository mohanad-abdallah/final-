import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {/* صفحة الرئيسية أو التسجيل إذا لم يكن هناك مستخدم مسجل */}
<Route path="/" element={ <Home />} />
        {/* صفحة تسجيل الدخول إذا كان المستخدم غير مسجل */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        {/* صفحة التسجيل إذا كان المستخدم غير مسجل */}
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />

        {/* صفحة الملف الشخصي */}
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
