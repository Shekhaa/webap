// SerenitySpace React App - Complete Frontend Structure

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar }  from './components/NavBar';
import { HomePage } from './pages/HomePage';
import {ServicesPage } from './pages/ServicesPage';
import {TherapistList  } from './pages/TherapistList';
import {TherapistProfile } from './pages/TherapistProfile';
import {BookingPage } from './pages/BookingPage';
import {UserProfile } from './pages/UserProfile';
import { ConfirmationPage } from './pages/ConfirmationPage';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/therapists" element={<TherapistList />} />
        <Route path="/therapists/:id" element={<TherapistProfile />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
