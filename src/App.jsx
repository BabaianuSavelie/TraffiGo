import "./App.css";
import { useState, Suspense } from 'react'
import Loading from './pages/Loading'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './pages/Map';
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Loading/>}/>
            <Route path="/map" element={<Map/>}/>
            <Route path="/game" element={<Game/>}/>
          </Routes>
        </Suspense>
    </Router>
  );
}

export default App;