import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Kaosdakwah from './pages/landing/Kaosdakwah';
import Kaosit from './pages/landing/Kaosit';
import Store from './pages/landing/Store';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/kaosinformatika" replace />} />
      <Route path="/kaosinformatika" element={<Kaosit/>} />
      <Route path="/kaosdakwah" element={<Kaosdakwah/>} />
    </Routes>
  )
}

export default App