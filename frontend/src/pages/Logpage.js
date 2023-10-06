import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceTable from '../components/PlaceTable';
import { Link } from 'react-router-dom';

function LogPage({ setPlace }) {
    const [places, setPlaces] = useState([]);
    const navigate = useNavigate();

    const loadPlaces = async () => {
        const response = await fetch('/places');
        const data = await response.json();
        setPlaces(data);
    }

    const editPlace = (place) => {
        navigate(`/edit/${place._id}`);
    }

    const deletePlace = async (id) => {
        const response = await fetch(`/places/${id}`, { method: 'DELETE' });
        if (response.status === 204) {
            loadPlaces();
        } else {
            console.error(`Failed to delete place with id = ${id}, status code = ${response.status}`);
        }
    }

    useEffect(() => {
        loadPlaces();
    }, []);

    return (
        <article>
            <h2>Places I have travelled</h2>
            <p>Here you can see all the places I have travelled to, add new places, or edit/delete existing entries.</p>
            <PlaceTable places={places} onEdit={editPlace} onDelete={deletePlace} />
        </article>
    );
}

export default LogPage;