import './App.css';
import React, {useState,useEffect} from "react";
import {Link,Routes,Route} from "react-router-dom";
import Axios from "axios";
import New from "./components/New"
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
        </Routes>
    </div>
  );
}

export default App;
