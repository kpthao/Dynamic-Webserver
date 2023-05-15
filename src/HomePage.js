import React from 'react';
import NavBar from './NavBar';
import './HomePage.css';
import {Link} from 'react-router-dom';


function HomePage() {
  return (
    <div>
      <header>
      <NavBar />
      </header>
      <main>
        <div class='banner'>
          <div class='inset'>
            <h1>Welcome</h1>
            <h2>This website contains the many of the things I've done in the past few years and will also be a declaration to what I hope to accomplish in the future as well.
            </h2>
          </div>
          <div class ='links'>
            <div class='link-box'>
              <li><Link to="/projects">Previous Works</Link></li>
            </div>
          </div>
        </div>
        <section id="homepage">
          <p>I'm a software developer based in Minnesota. This website will be used as a portfolio to showcase the things I've done in the past, current projects, my experiences, and my current skill level. Since I am still relatively new to the field, most of the things that will be posted here will be demos/short projects/fun things I'm trying out.</p>
        </section>
      </main>
      <footer>
        <p>&copy; Kong Pheng Thao 2023</p>
      </footer>
    </div>
  );
}

export default HomePage;