'use strict';

import express from 'express';
import { products } from './products.js';
import asyncHandler from 'express-async-handler';
import nodemailer from 'nodemailer';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let htmlTop = `
<!doctype html>
<html lang="en">
<head>
   <meta charset='utf-8'>
   <meta http-equiv='X-UA-Compatible' content='IE=edge'>
   <title>Humayl Malik</title>
   <meta name='viewport' content='width=device-width, initial-scale=1'>
   <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
</head>
<body>
    <header>
        <h1><strong>Humayl Malik</strong></h1>
    </header>
    <nav>
        <a href="index.html">Home</a>
        <a href="contact.html">Contact</a>
        <a href="gallery.html">Gallery</a>
    </nav>
    <main>
`;

let htmlBottom = `
    </main>
    <footer>
        <p>&copy; 2023 Humayl Malik. All rights reserved.</p>
    </footer>
</body>
</html>
`;

function getProduct(productName) {
  for (let i = 0; i < products.length; i++) {
      if (products[i].product === productName) {
          return products[i];
      }
  }
}

app.post('/your_endpoint_here', (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const delivery = req.body.delivery;
  const productChoice = req.body.product;
  const quantity = req.body.quantity;

  const chosenProduct = getProduct(productChoice);
  const totalPrice = (chosenProduct.price * quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  res.send(`${htmlTop}
      <h2>Order Confirmation</h2>
      <p>Thank you for your order, ${name}!</p>
      <p>We will deliver ${quantity} ${chosenProduct.product}(s) from ${chosenProduct.company} to ${address} as per your delivery instructions.</p>
      <p>The total cost of your order is ${totalPrice}.</p>
      ${htmlBottom}
  `);
});


app.post('/submit-form', (req, res) => {
   const name = req.body.name;
   const email = req.body.email;
   const message = req.body.message;
   const category = req.body.category;
   const contactMethod = req.body.contact_method;
   const services = req.body.services;
   

   res.send(`${htmlTop}
      <h2>Form Submission Received</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      <p>Category: ${category}</p>
      <p>Preferred Contact Method: ${contactMethod}</p>
      <p>Services Interested In: ${services.join(', ')}</p>
      ${htmlBottom}
   `);

   async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Arvid" <arvid.buckridge32@ethereal.email>', // sender address
      to: email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    await main(); 
  }
});

app.get('/random-person', asyncHandler(async (req, res, next) => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        next(error);
    }
}));

app.use((error, req, res, next) => {
    res.status(500).send(`<p>An error occurred: ${error.message}</p>`);
});

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});


let apiCallCount = 0;
app.use((req, res, next) => {
  if (req.path === '/random-person') {
    apiCallCount++;
    if (apiCallCount % 10 === 0) {
      console.log(`The Express server has been called ${apiCallCount} times.`);
    }
  }
  next();
});