import React from 'react'
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom"
import SinglePage from './SinglePage'

const About = () => {
  const { pathname } = useLocation();
  let { id } = useParams();
  console.log(`${pathname}/${id}`);
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to="about-app" >About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
      </ul>
      <Routes>
        <Route path={`${pathname}/:slug`} element={<SinglePage />} />
      </Routes>
    </div >
  )
}
export default About

