### Initial Setup
* Installed knexjs, nodemon, create-react-app, dotenv and configured

### To run
* To run please npm install to install all packages
* Then, create a .env file at top level populating with correct DB_USER and DB_PASS credentials

### Notes
* Installed all currently required packages, seeded table
* Large struggle getting react to work on same port as node, eventually decided to work on different ports.
* Had to for the time being allow all origins for CORS Access-Control-Allow-Origin, as each new route caused an issue
* GET all works and outputs to page as an unordered list. Merged. Going to build test for the component and then work on POST
