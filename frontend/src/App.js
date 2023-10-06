import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BlogPage from './pages/BlogPage.js';
import ContactPage from './pages/ContactPage.js';
import HomePage from './pages/HomePage.js';
import Nav from './components/Nav.js';
import GalleryPage from './pages/GalleryPage.js'; 
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import LogPage from './pages/Logpage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';
import TopicsPage from './pages/TopicPage.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>Humayl's Website</h1>
        </header>

        <Nav />

        <main>
          <section className="App-article">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} /> 
              <Route path="/blog" element={<BlogPage />} /> 
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/staff" element={<StaffPage />} /> 
              <Route path="/order" element={<OrderPage />} /> 
              <Route path="/log" element={<LogPage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/edit/:id" element={<EditPage />} />
              <Route path="/topics" element={<TopicsPage />} />

            </Routes>
          </section>
        </main>
        
        <footer>
          <p>&copy; 2023 Humayl Malik</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
