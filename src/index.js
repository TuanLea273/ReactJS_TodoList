import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
//component
import TodoContainer from "./components/TodoContainer"
import Navbar from './components/Navbar';
import NotMatch from './components/NotMatch';
import About from './components/About';

//stylesheet
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route element={<><Navbar /><div><Outlet /></div></>}>
        <Route path="/" element={<TodoContainer />} />
        <Route path="about/*" element={<About />}/>
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  </Router >
);

