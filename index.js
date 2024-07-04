require('dotenv').config();

const BASE_URL = process.env.BASE_URL;
console.log(`Server is running at: ${BASE_URL}`);



const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection error:', err));

// Define the Person schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

// Create the Person model
const Person = mongoose.model('Person', personSchema);

// Create and save a person
const createAndSavePerson = (done) => {
  const person = new Person({ name: 'John Doe', age: 30, favoriteFoods: ['Pizza', 'Pasta'] });
  
  person.save((err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

// Create many people
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return done(err);
    done(null, people);
  });
};

// Find people by name
const findPeopleByName = (name, done) => {
  Person.find({ name: name }, (err, people) => {
    if (err) return done(err);
    done(null, people);
  });
};

// Find one person by favorite food
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, person) => {
    if (err) return done(err);
    done(null, person);
  });
};

// Find a person by ID
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return done(err);
    done(null, person);
  });
};

// Find, edit, then save
const findEditThenSave = (personId, done) => {
  Person.findById(personId, (err, person) => {
    if (err) return done(err);
    person.favoriteFoods.push('hamburger');
    person.save((err, updatedPerson) => {
      if (err) return done(err);
      done(null, updatedPerson);
    });
  });
};

// Find one and update
const findAndUpdate = (personName, done) => {
  Person.findOneAndUpdate({ name: personName }, { age: 20 }, { new: true }, (err, updatedPerson) => {
    if (err) return done(err);
    done(null, updatedPerson);
  });
};

// Remove by ID
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if (err) return done(err);
    done(null, removedPerson);
  });
};

// Remove many people
const removeManyPeople = (done) => {
  Person.remove({ name: 'Mary' }, (err, result) => {
    if (err) return done(err);
    done(null, result);
  });
};

// Chain search query helpers
const queryChain = (done) => {
  Person.find({ favoriteFoods: 'burritos' })
    .sort({ name: 1 })
    .limit(2)
    .select('-age')
    .exec((err, data) => {
      if (err) return done(err);
      done(null, data);
    });
};






  