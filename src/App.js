import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import UserList from './components/Users/UserList';
import EditUser from './components/Users/EditUser';
import './App.css';

const App = () => {
  const isAuthenticated = () => {
    return localStorage.getItem('token');
  };

  const RequireAuth = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<RequireAuth><UserList /></RequireAuth>} />
        <Route path="/users/edit/:id" element={<RequireAuth><EditUser /></RequireAuth>} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;