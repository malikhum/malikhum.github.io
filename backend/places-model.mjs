// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Places collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const placeSchema = mongoose.Schema({
    name: { type: String, required: true },
    timesVisited: { type: Number, required: true },
    lastVisited: { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema.
const Place = mongoose.model('Place', placeSchema);

// CREATE model
const createPlace = async (name, timesVisited, lastVisited) => {
    const place = new Place({ 
        name: name, 
        timesVisited: timesVisited, 
        lastVisited: lastVisited 
    });
    return place.save();
}

// RETRIEVE models
const retrievePlaces = async () => {
    const query = Place.find();
    return query.exec();
}

// RETRIEVE by ID
const retrievePlaceByID = async (_id) => {
    const query = Place.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id
const deletePlaceById = async (_id) => {
    const result = await Place.deleteOne({_id: _id});
    return result.deletedCount;
};

// UPDATE model
const updatePlace = async (_id, name, timesVisited, lastVisited) => {
    const result = await Place.replaceOne({_id: _id }, {
        name: name,
        timesVisited: timesVisited,
        lastVisited: lastVisited
    });
    return { 
        _id: _id, 
        name: name,
        timesVisited: timesVisited,
        lastVisited: lastVisited 
    }
}

// Export our variables for use in the controller file.
export { createPlace, retrievePlaces, retrievePlaceByID, updatePlace, deletePlaceById }
