
import './App.css'
import Landingpage from './pages/landingpage.jsx'
import Login from './pages/Login.jsx';
import { Routes, Route } from "react-router-dom";
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
return(
    <>
  <Routes>
    <Route>
    <Route path="/" element={<Landingpage/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
    </Route>
  </Routes>
    </>
)
}

export default App

