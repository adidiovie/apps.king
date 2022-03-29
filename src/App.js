import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './index.css';
import Review from './reviews';
function App() {
  return (
    <main>
      <nav>
      <Link to="/Form">log out</Link> |{" "}
      <div className='underline'></div>
      </nav>
      <section className='container'>
        <div className='title'>
          <h2>tunde's coding commity</h2>
          <h2>Staff/ non Staff</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
      <Outlet />
    </main> 
  ); 
}

export default App;