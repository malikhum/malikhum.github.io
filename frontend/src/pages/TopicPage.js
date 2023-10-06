import React from 'react';
import { Link } from 'react-router-dom';

function TopicsPage() {
   return (
      <>
        <header>
            <h1><strong>Web Development Concepts</strong></h1>
        </header>
        <nav class="local-nav">
            <Link to="#forms">Forms</Link>
            <Link to="#express">Express</Link>
            <Link to="#JavaScript">JavaScript</Link>
            <Link to="#DOM-Changes">DOM Changes</Link> 
        </nav>
        <main>
            <section>
                <h2><strong>Web Servers</strong></h2>
                <article>
                <h3><strong>Web Servers</strong></h3>
                    <p>In relation to web servers, an index.html file is a default file that web servers look for when a
                        user requests to view a directory on a website. It is the default or home page for a website that is
                        displayed in a web browser when a user navigates to the website's domain name without specifying a
                        specific file or path.</p>
                    <p>The main difference between the two requests is the protocol used to access the file or server. In
                        the first request, the protocol used is “file:///“, which indicates that the file is being accessed
                        locally on the user's machine. The second request uses the “https://” protocol to access a remote
                        server. Additionally, the second request contains much more information about the server and the
                        response, including the server type, headers, while the first request only provides basic
                        information about the file and its content type. This is because the second request is a standard
                        HTTP request sent to a web server, while the first request is a simple file request made directly to
                        the user's file system.</p>
                    <p>In this case, the favicon.ico file is found and retrieved by the server, which is why a status code
                        of 200 is returned. On the other hand, the main.css and main.js files are not found by the server,
                        which is why a status code of 404 is returned.</p>
                    <p>The scheme is the first part of the URL. In the given URL, the scheme is “HTTPS”. The subdomain is
                        the part of the URL that comes before the domain name. In the URL, “web” is the subdomain. The host
                        domain is the part of the URL that identifies the website. In this URL, the subdomain is “web.engr”
                        and the domain is “oregonstate.edu”. The resource is the specific location of the file or resource
                        on the website. In this URL, the resource is “/~malikhum/a1-malikhum/“.</p>
                </article>
                <article>
                    <h2><strong>Frontend Design</strong></h2>
                    <article>
                    <h3><strong>Frontend Design</strong></h3>
                    <p><strong>Frontend design</strong> refers to the process of designing and creating the visual and
                        interactive elements of a website that users interact with. This includes the layout, typography,
                        colors, images, and user interface components such as buttons and forms.</p>
                    <dl>
                        <dt><strong>Efficiency:</strong></dt>
                        <dd>Efficiency in web design means creating a website that allows users to achieve their goals in
                            the shortest amount of time possible. This can be achieved by designing a clear and intuitive
                            user interface, optimizing page load times, and minimizing the number of steps required to
                            complete a task.</dd>
                        <dt><strong>Accessibility:</strong></dt>
                        <dd>Accessibility in web design means creating a website that can be used by everyone, regardless
                            of their abilities or disabilities. This can be achieved by following web accessibility
                            guidelines and standards, using accessible fonts and colors, providing alternative text for
                            images, and ensuring that the website can be navigated using a keyboard.</dd>
                        <dt><strong>Usability:</strong></dt>
                        <dd>Usability in web design means creating a website that is easy to use and understand. This can
                            be achieved by designing a logical and intuitive navigation system, providing clear and
                            concise content, and ensuring that the website is responsive and works well on all devices and
                            screen sizes.</dd>
                        <dt><strong>Functionality:</strong></dt>
                        <dd>Functionality in web design means creating a website that works correctly and consistently.
                            This can be achieved by thoroughly testing the website on different devices and browsers,
                            ensuring that all links and interactive elements work as expected, and providing helpful error
                            messages when something goes wrong.</dd>
                    </dl>
                    </article>
                </article>
                <article id="forms">
                <h3>Forms</h3>
                <p>The 6 major goals of accessible forms are to provide clear instructions, let users know why, set the first field to autofocus, ensure each form of control can be filled in using the keyboard, add tab indexing to complex forms, and to ensure validation messages are screen readable.s are to provide clear instructions, let users know why, set the first field to autofocus, ensure each form of control can be filled in using the keyboard, add tab indexing to complex forms, and to ensure validation messages are screen readable.</p>
            </article>
            <article id="express">
                <h3>Express</h3>
                <p>Node, NPM, and Express are three technologies that are commonly used together in web development. They each serve different purposes and help to improve the web development experience in various ways.Node.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript code on the server-side. NPM is the default package manager for Node.js. It provides an extensive registry of reusable packages and modules that developers can include in their projects, saving time and effort. Express is a lightweight web application framework for Node.js, designed to simplify the development of server-side web applications.</p>
            </article>
            <article id="JavaScript">
                <h3><strong>About JavaScript</strong></h3>
                <p>JavaScript is a high-level, interpreted programming language that is a staple of modern web development. It is primarily used to enhance interactivity on websites and provide dynamic content.</p>
                <ul>
                    <li><strong>Main data types:</strong> JavaScript has several data types including Number, String, Boolean, Symbol, Object, and undefined.</li>
                    <li><strong>Objects, arrays, and JSON:</strong> Objects and arrays are complex data types that can hold multiple values. JSON (JavaScript Object Notation) is a format for storing and transporting data, often used when data is sent from a server to a web page.</li>
                    <li><strong>Conditionals and loops:</strong> JavaScript uses conditional statements to perform different actions based on different conditions. Loops can execute a block of code a number of times.</li>
                    <li><strong>Object-oriented programming:</strong> JavaScript supports object-oriented programming with object prototypes. Objects encapsulate data, which can be inherited by creating instances of objects.</li>
                    <li><strong>Functional programming:</strong> JavaScript also supports functional programming where functions are first-class objects. Functions can be assigned to variables, stored in data structures, passed as arguments to other functions, and returned as values from other functions.</li>
                </ul>
            </article>
            <article id="DOM-Changes">
                <h3><strong>DOM-Changes</strong></h3>
                <p>Developers use JavaScript and Express to manipulate the Document Object Model (DOM) of a webpage in order to create dynamic and interactive web content. This can include changing the structure of HTML elements, modifying the content of a page, or even adding new styles. By using random data, developers can test these DOM changes under various scenarios, ensuring the page behaves as expected for a wider range of user interactions and data conditions. This approach is vital for robust, user-focused web development.</p>
            </article>  
            </section>
        </main>
        <footer>
            <p>© 2023 Humayl Malik. All rights reserved.</p>
        </footer>
      </>
   );
}

export default TopicsPage;