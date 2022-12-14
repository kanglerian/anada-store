import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Kaos from './pages/kaos/Kaos';
import Kaosdakwah from './pages/landing/Kaosdakwah';
import Kaosit from './pages/landing/Kaosit';
import Store from './pages/landing/Store';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Store/>} />
      <Route path="/kaos" element={<Kaos/>} />
      <Route path="/kaosinformatika" element={<Kaosit/>} />
      <Route path="/kaosdakwah" element={<Kaosdakwah/>} />
    </Routes>
  )
}

export default App