import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';

function EditPage() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [visits, setVisits] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlace = async () => {
            const response = await fetch(`/places/${id}`);
            const place = await response.json();
            setName(place.name);
            setDate(place.lastVisited);
            setVisits(place.timesVisited);
        };
        fetchPlace();
    }, [id]);

    const editPlace = async () => {
        const place = { name, lastVisited: date, timesVisited: visits };
        const response = await fetch(`/places/${id}`, {
            method: 'PUT',
            body: JSON.stringify(place),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            alert('Place successfully updated.');
            navigate('/log');
        } else {
            alert('Failed to update the place.');
        }
    };

    return (
        <article>
            <h2>Edit Place</h2>
            <p>Here you can edit the details of a place you have travelled to.</p>
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
                        <td><button onClick={editPlace}>Save Changes</button></td>
                    </tr>
                </tbody>
            </table>
            <Link to="/log">Back to Log Table</Link>
        </article>
    );
}

export default EditPage;