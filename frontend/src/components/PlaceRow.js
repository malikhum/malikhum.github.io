import React from 'react';

function PlaceRow({ place, onEdit, onDelete }) {
    return (
        <tr>
            <td>{place.name}</td>
            <td>{place.lastVisited.slice(0, 10)}</td>
            <td>{place.timesVisited}</td>
            <td>
                <button onClick={() => onEdit(place)}>Edit</button>
                <button onClick={() => onDelete(place._id)}>Delete</button>
            </td>
        </tr>
    );
}

export default PlaceRow;