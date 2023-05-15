import React from 'react';
import NavBar from './NavBar';
import './HomePage.css';

function Contact() {
  return (
    <div>
      <header>
      <NavBar />
      </header>
      <main>
        <section id="contact">
          <h2>Want to Contact Me?</h2>
          <p>As of right now, the best way to contact me would be through email. <br/> <br/>
          In order to ensure efficient communication between us, please include as much information within the email.</p>
        </section>
      </main>
      <footer>
        <p>&copy; Kong Pheng Thao 2023</p>
      </footer>
    </div>
  );
}

export default Contact;