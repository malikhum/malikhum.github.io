import 'dotenv/config';
import express from 'express';
import * as places from './places-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.

// CREATE controller
app.post ('/places', (req,res) => { 
    places.createPlace(
        req.body.name, 
        req.body.timesVisited, 
        req.body.lastVisited
        )
        .then(place => {
            res.status(201).json(place);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'create a document failed' });
        });
});

// RETRIEVE controller
app.get('/places', (req, res) => {
    places.retrievePlaces()
        .then(place => { 
            if (place !== null) {
                res.json(place);
            } else {
                res.status(404).json({ Error: 'document not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'retrieve document failed.' });
        });
});

// RETRIEVE by ID controller
app.get('/places/:_id', (req, res) => {
    places.retrievePlaceByID(req.params._id)
    .then(place => { 
        if (place !== null) {
            res.json(place);
        } else {
            res.status(404).json({ Error: 'document not found' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'retrieve document failed' });
    });

});

// UPDATE controller
app.put('/places/:_id', (req, res) => {
    places.updatePlace(
        req.params._id, 
        req.body.name, 
        req.body.timesVisited, 
        req.body.lastVisited
    )
    .then(place => {
        res.json(place);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'document update failed' });
    });
});

// DELETE Controller
app.delete('/places/:_id', (req, res) => {
    places.deletePlaceById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'document no longer exists' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'delete a document failed' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
