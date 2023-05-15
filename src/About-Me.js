import React from 'react';
import NavBar from './NavBar';
import './HomePage.css';

function AboutMe() {
  return (
    <div>
      <header>
      <NavBar />
      </header>
      <main>
        <section id="about-me">
          <h2>About Me</h2>
          <p>I studied Computer Science at the University of St. Thomas starting from Fall of 2019 to Winter of 2022. Through my schooling, I've learned many applications of Object Orientated Programming, algorithms, best practices, and integral safety precautions when engineering software for users. As a result, most of my expertise is related to analytical approaches and problem solving. </p>
        </section>
      </main>
      <footer>
        <p>&copy; Kong Pheng Thao 2023</p>
      </footer>
    </div>
  );
}

export default AboutMe;