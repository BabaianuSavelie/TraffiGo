import "./App.css";
import Game from "./pages/Game";
import { useState } from 'react'
import Loading from './pages/Loading'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './pages/Map'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading/>}/>
        <Route path="/map" element={<Map/>}/>
      </Routes>
    </Router>
  );
}

export default App;