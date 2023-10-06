import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'images/bear.jpg',
        thumbnail: 'images/bear.jpg',
        description: 'This is a picture of a Black Bear taken at the Oregon Zoo.',
        originalHeight: '450px',
    },
    {
        original: 'images/beaver.jpg',
        thumbnail: 'images/beaver.jpg',
        description: 'This is a picture of a Beaver taken at the Oregon Zoo forest section.',
        originalHeight: '450px',
    },
    {
        original: 'images/giraffe.jpg',
        thumbnail: 'images/giraffe.jpg',
        description: 'This is a picture of a Giraffe taken at the Oregon Zoo.',
        originalHeight: '450px',
    },
    {
        original: 'images/lights.jpg',
        thumbnail: 'images/lights.jpg',
        description: 'This is a picture of Christmas lights taken at Cannon Beach in a Cafe.',
        originalHeight: '450px',
    },
    {
        original: 'images/otter.jpg',
        thumbnail: 'images/otter.jpg',
        description: 'This is a picture of an Otter taken at the Oregon Zoo in the Aquarium Section.',
        originalHeight: '450px',
    },
    {
        original: 'images/plane.jpg',
        thumbnail: 'images/plane.jpg',
        description: 'This is a picture of a Plane taken at an aviation show in Hillsboro Oregon.',
        originalHeight: '450px',
    },
    {
        original: 'images/snow-lep.jpg',
        thumbnail: 'images/snow-lep.jpg',
        description: 'This is a picture of a Snow Leopard taken at the Oregon Zoo in the Exploration Zone.',
        originalHeight: '450px',
    },
    {
        original: 'images/sphinx.jpg',
        thumbnail: 'images/sphinx.jpg',
        description: 'This is a picture of a Jackal Cat taken at the Oregon Zoo in the African Savana Zone.',
        originalHeight: '450px',
    },
    {
        original: 'images/white-bird.jpg',
        thumbnail: 'images/white-bird.jpg',
        description: 'This is a picture of a white bird taken in the Oregon Zoo in the Bird Zone.',
        originalHeight: '450px',
    },
    {
        original: 'images/yellow-bird.jpg',
        thumbnail: 'images/yellow-bird.jpg',
        description: 'This is a picture of a yellow bird taken in the Oregon Zoo in the Bird Zone.',
        originalHeight: '450px',
    },
];

function GalleryPage() {
    return (
        <>
            <header>
                <h1><strong>Humayl Malik</strong></h1>
            </header>
            <nav>
                <a href="/">Home</a>
                <a href="/gallery">Gallery</a>
                <a href="/contact">Contact</a>
                <a href="/order">Order</a>
                <a href="/staff">Staff</a>
            </nav>
            <main>
                <section>
                    <h2><strong>Gallery</strong></h2>
                    <nav className="local-nav">
                        {/* Local navigation links go here */}
                    </nav>
                    <article>
                        <ImageGallery items={images} />
                    </article>
                </section>
            </main>
            <footer>
                <p>© 2023 Humayl Malik. All rights reserved.</p>
            </footer>
        </>
    );
}

export default GalleryPage;
