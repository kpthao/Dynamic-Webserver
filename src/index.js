import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import AboutMe from './About-Me';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about-me" element={<AboutMe />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </BrowserRouter>,
document.getElementById('root')
);