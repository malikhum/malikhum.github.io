import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StaffRow from "../components/StaffRow.js"

const StaffPage = () => {

    const [results, setResults] = useState([]);

    const fetchStaff = () => {
        fetch("https://randomuser.me/api/?results=10")
        .then(response => {
            if (!response.ok) {
                throw new Error("API response not OK");
            }
            return response.json();
        })
        .then(data => {
            setResults(data.results);
        })
        .catch(error => {
            alert("Unable to fetch API data. Please try again later.");
            console.error(error);
        });
    };

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/order">Order</Link>
                <Link to="/staff">Staff</Link>
            </nav>

            <h2>Staff Page</h2>

            <article>
                <p>
                    This page demonstrates the functionality of generating random staff details. 
                    Click the buttons to request data from the browser or the server.
                </p>
                <a href="https://randomuser.me/" target="_blank" rel="noopener noreferrer">Random User Generator</a>
                <p>
                    Call API
                    <button onClick={fetchStaff}>Get Staff</button>
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Portrait</th>
                            <th>Name/Email</th>
                            <th>Telephone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((person, i) => <StaffRow person={person} key={i} />)}
                    </tbody>
                </table>
            </article>
        </>
    );
};

export default StaffPage;
