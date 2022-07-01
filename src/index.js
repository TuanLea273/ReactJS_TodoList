import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//component
import TodoContainer from "./components/TodoContainer"
import Navbar from './components/Navbar';
import NotMatch from './components/NotMatch';
import About from './components/About';

//stylesheet
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route index path="/" element={<TodoContainer />} />
      <Route path="about" element={<About />} >
     
      </Route>
      <Route element={<NotMatch />} />
    </Routes>
  </Router>
);

