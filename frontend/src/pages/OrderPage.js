import React from 'react';
import ProductRow from '../components/ProductRow.js';

function OrderPage() {
  return (
    <>
      <header>
        <h1>Order Page</h1>
      </header>
      <nav>
        <a href="/">Home</a>
        <a href="/order">Order</a>
        <a href="/staff">Staff</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </nav>
      <main>
        <section>
          <h2>Order Form</h2>
          <article>
            <p>
              On this page, you can select only one product and place an order for how many of that product you want.
            </p>
            <form action="your_endpoint_here" method="POST">
              <fieldset>
                <legend>Personal Information</legend>
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" name="name" placeholder="Your Name" className="required" autoFocus />
                <label htmlFor="email">Your Email</label>
                <input id="email" type="email" name="email" placeholder="Your Email" className="required" />
                <label htmlFor="address">Your Address</label>
                <input id="address" type="text" name="address" placeholder="Your Address" className="required" />
              </fieldset>
              <fieldset>
                <legend>Product Selection</legend>
                <table>
                  <caption>Select a Product</caption>
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Note: These product details should ideally be dynamically generated. */}
                    <ProductRow
                      product={{
                        company: 'AGYM',
                        product: 'Spinning Cat Scratcher Ball',
                        price: 52.99,
                      }}
                    />
                    <ProductRow
                      product={{
                        company: 'Jasonwell',
                        product: 'Foldable Dog Pool',
                        price: 27.25,
                      }}
                    />
                    <ProductRow
                      product={{
                        company: 'Expawlorer',
                        product: 'Dog Fence Window',
                        price: 30.5,
                      }}
                    />
                    <ProductRow
                      product={{
                        company: 'Lollimeow',
                        product: 'Capsule Pet Travel Backpack',
                        price: 59.0,
                      }}
                    />
                    <ProductRow
                      product={{
                        company: "Drool'd",
                        product: 'Cat Hamster Wheel',
                        price: 349.75,
                      }}
                    />
                  </tbody>
                </table>
                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" type="number" name="quantity" placeholder="Quantity" className="required" />
                <label htmlFor="delivery">Delivery Instructions</label>
                <textarea id="delivery" name="delivery" placeholder="Delivery Instructions" />
              </fieldset>
              <button type="submit">Submit Order</button>
            </form>
          </article>
        </section>
      </main>
      <footer>
        <p>© 2023 Humayl Malik. All rights reserved.</p>
      </footer>
    </>
  );
}

export default OrderPage;
