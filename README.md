# MoneyMaster
This is a full-stack web application for managing accounting tasks developed using the MERN (MongoDB, Express, React, Node.js) stack.
Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites

    Node.js (version 12 or higher)
    MongoDB (running locally or in the cloud)

Installing

    Clone the repository to your local machine.
    Navigate to the project directory using the command line.
    Install dependencies by running npm install in both the frontend and backend directories.

Configuration

    Create a .env file in the backend directory.
    Add the following environment variables and set their values according to your MongoDB configuration:

makefile

MONGO_URI=<your_mongodb_uri>
MONGO_DB_NAME=<your_mongodb_database_name>

Running

    In the backend directory, run node server.js to start the Node.js server.
    In the frontend directory, run npm start to start the React app.
    Access the app in your browser at http://localhost:3000.

Built With

    MongoDB - NoSQL database
    Express.js - Node.js web framework
    React - JavaScript library for building user interfaces
    Node.js - JavaScript runtime
