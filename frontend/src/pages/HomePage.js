import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
   return (
      <>
        <header>
            <h1><strong>Humayl Malik</strong></h1>
        </header>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/order">Order</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/log">LogPage</Link>
        <Link to="/topics">Topics</Link>
        </nav>
        <main>
            <section>
                <h2><strong>Welcome to My Website!</strong></h2>
                <p>This website showcases my skills and knowledge in various web development technologies and concepts. Below, I have described the technologies used to develop this website:</p>
                <ul>
                    <li><strong>HTML & CSS:</strong> The building blocks of any website, used to structure content and define its look and feel.</li>
                    <li><strong>JavaScript:</strong> The programming language that makes websites interactive. It's used for client-side as well as server-side development.</li>
                    <li><strong>React:</strong> A JavaScript library for building user interfaces, particularly single-page applications. It allows for efficient updates and rendering of components.</li>
                    <li><strong>Node.js:</strong> A JavaScript runtime that allows running JavaScript on the server side. It's used for building scalable network applications.</li>
                    <li><strong>Express.js:</strong> A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</li>
                    <li><strong>MongoDB:</strong> A source-available cross-platform document-oriented database program. It uses JSON-like documents with optional schemas.</li>
                    <li><strong>Mongoose:</strong> An Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and translates between objects in code and the representation of those objects in MongoDB.</li>
                    <li><strong>RESTful APIs:</strong> Architectural style for an application program interface (API) that uses HTTP requests to access and use data.</li>
                    <li><strong>Google Fonts & Icons:</strong> Used to enhance the user interface and provide a more visually appealing and user-friendly experience.</li>
                    <li><strong>Image Optimization:</strong> The process of delivering high-quality images in the right format, dimension, size, and resolution while keeping the smallest possible size.</li>
                </ul>
                <p>Feel free to explore and learn more about my journey in web development!</p>
            </section>
        </main>
        <footer>
            <p>© 2023 Humayl Malik. All rights reserved.</p>
        </footer>
      </>
   );
}

export default HomePage;
