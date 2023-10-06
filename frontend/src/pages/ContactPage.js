import React from 'react';

function ContactPage() {
  return (
    <>
      <header>
        <h1><strong>Humayl Malik</strong></h1>
      </header>
      <nav>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/gallery">Gallery</a>
        <a href="/order">Order</a>
        <a href="/staff">Staff</a>
      </nav>
      <section>
        <h2><strong>Contact</strong></h2>
        <p>
          Please fill out the form below to get in touch. If you have never filled out an online form, simply provide
          the requested information and click the submit button at the end of the form.
        </p>
        <article>
          <form action="/submit-form" method="post">
            <fieldset>
              <legend>Personal Information</legend>
              <label htmlFor="name" className="required">Name:</label>
              <input type="text" name="name" id="name" required placeholder="Your name" autoFocus />
              <br />
              <label htmlFor="email" className="required">Email:</label>
              <input type="email" name="email" id="email" required placeholder="Your email" />
            </fieldset>
            <fieldset>
              <legend>Message</legend>
              <label htmlFor="message" className="required">Your message:</label>
              <textarea name="message" id="message" required placeholder="Type your message here" />
            </fieldset>
            <fieldset>
              <legend>Preferences</legend>
              <label htmlFor="category">Category:</label>
              <select name="category" id="category">
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
              </select>
              <br />
              <label>Preferred contact method:</label>
              <label htmlFor="phone">
                <input type="radio" name="contact_method" id="phone" value="phone" />
                Phone
              </label>
              <label htmlFor="email">
                <input type="radio" name="contact_method" id="email" value="email" />
                Email
              </label>
              <br />
              <label>Services you are interested in:</label>
              <label htmlFor="web_design">
                <input type="checkbox" name="services[]" id="web_design" value="web_design" checked />
                Web Design
              </label>
              <label htmlFor="seo">
                <input type="checkbox" name="services[]" id="seo" value="seo" />
                SEO
              </label>
              <label htmlFor="app_development">
                <input type="checkbox" name="services[]" id="app_development" value="app_development" />
                App Development
              </label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </article>
      </section>
      <footer>
        <p>&copy; 2023 Humayl Malik. All rights reserved.</p>
      </footer>
    </>
  );
}

export default ContactPage;
