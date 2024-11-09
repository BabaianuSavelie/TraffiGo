import "./App.css";
import Game from "./pages/Game";
import { useState } from 'react'
// import Home from './pages/Home'
import Loading from './pages/Loading'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './pages/Map'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading/>}/>
        <Route path="/map" element={<Map/>}/>
      </Routes>
    </Router>
    // <>
    //   <Loading />
    // </>
  );
}

export default App;
