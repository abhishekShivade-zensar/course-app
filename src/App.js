import React from 'react';
import './App.css';
import { HomePage } from './components/home/home-page.component';
import { Routes, Route } from 'react-router-dom'
import { CoursesPage } from './components/courses/courses-page.component';
import { AboutPage } from './components/about/about-page.component';
import Header from './components/header/header.component';
// import { Base } from './components/base/base.component';
import { PageNotFound } from './components/pageNotFound/page-not-found.component'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route index element={<HomePage />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
