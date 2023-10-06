import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function CreatePage() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [visits, setVisits] = useState('');
    const navigate = useNavigate();

    const addPlace = async () => {
        const place = { name, lastVisited: date, timesVisited: visits };
        const response = await fetch('/places', {
            method: 'POST',
            body: JSON.stringify(place),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 201) {
            alert('Place successfully added.');
            navigate('/log');
        } else {
            alert('Failed to add the place.');
        }
    };

    return (
        <article>
            <h2>Add a New Place</h2>
            <p>Here you can add a new place you have travelled to.</p>
            <table>
                <tbody>
                    <tr>
                        <td><label>Name:</label></td>
                        <td><input type="text" value={name} onChange={e => setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label>Date:</label></td>
                        <td><input type="date" value={date} onChange={e => setDate(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label>Number of Visits:</label></td>
                        <td><input type="number" value={visits} onChange={e => setVisits(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button onClick={addPlace}>Add Place</button></td>
                    </tr>
                </tbody>
            </table>
            <Link to="/log" style={{
                display: 'inline-block',
                padding: '10px 20px',
                color: 'white',
                backgroundColor: '#007BFF',
                borderRadius: '4px',
                textDecoration: 'none',
                textAlign: 'center',
                marginTop: '10px'
            }}>Back to Log Table</Link>
        </article>
    );
}

export default CreatePage;