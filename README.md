# Airport Distance Calculator

App plots any two US airports on a Google Map and displays the distance between the two airports in Nautical Miles.

## Running the application

To run the application, type: 'npm install && npm start' in the command line
Visit localhost:3000 in Chrome

Note - The application is setup to only run in development mode

Run tests using 'npm test' in the command line (requires an npm install before running)

## Technologies used

- React
- Redux - Used for state management and storing the airports
- Immutable.js - Immutable data structures in JS, align with Redux persistent state tree
- Node.js / Express - Simple Express server running to access the SITO Airport API


Note - No Google API key used in map, as it will run locally without an API key
