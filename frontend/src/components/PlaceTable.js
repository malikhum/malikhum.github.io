import React from 'react';
import { Link } from 'react-router-dom';
import PlaceRow from './PlaceRow.js';

function PlaceTable({ places, onEdit, onDelete }) {
    return (
        <table>
            <caption>
            <Link to="/create" style={{
                display: 'inline-block',
                padding: '10px 20px',
                color: 'white',
                backgroundColor: '#007BFF',
                borderRadius: '4px',
                textDecoration: 'none',
                textAlign: 'center',
                marginTop: '10px'
            }}>Add New Place</Link>
            </caption>
            <thead>
                <tr>
                    <th>Place Name</th>
                    <th>Visit Date</th>
                    <th>Number of Visits</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {places.map(place => (
                    <PlaceRow key={place._id} place={place} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    );
}

export default PlaceTable;