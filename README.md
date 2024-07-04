# Mongoose and MongoDB Project

## Introduction
This project demonstrates how to use Mongoose with MongoDB to perform various database operations.

## Setup
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file and add your MongoDB Atlas URI:
    ```
    MONGO_URI='your_mongodb_atlas_uri'
    ```
4. Start the server using `node index.js`.

- `POST /person` - Create and save a person.
- `POST /people` - Create and save multiple people.
- `GET /people/:name` - Find people by name.
- `GET /person/food/:food` - Find one person by favorite food.
- `GET /person/id/:id` - Find a person by ID.
- `PUT /person
