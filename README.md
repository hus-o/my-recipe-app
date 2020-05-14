### Initial Setup
* Installed knexjs, nodemon, create-react-app, dotenv and configured

### To run
* To run please npm install to install all packages
* Then, create a .env file at top level populating with correct DB_USER and DB_PASS credentials

### Working Notes
* Installed all currently required packages, seeded table
* Large struggle getting react to work on same port as node, eventually decided to work on different ports.
* Had to for the time being allow all origins for CORS Access-Control-Allow-Origin, as each new route caused an issue
* GET all works and outputs to page as an unordered list. Merged. Going to build test for the component and then work on POST
* On trying to do POST method on the post component I ran into the CORS issue again, after installing cors module and app.use(cors()) globally on server this problem was alliviated. Took a long time for such a simple thing and it ate into my testing / styling time but I'm happy I got there in the end, now I know for the future.
* Post page has a form which posts to db and redirects to view page so user can see new post
* The time taken input has a constraint to prevent anything other than number. The reason for this rather than input type=number was because the latter caused input issues where I couldn't change the value of the field.
* Issue when trying to redirect users on form submission due to CORS error, so I just sent a response back to display after the api call, to which I added a button for users to click

### Additional Comments
* I would've liked to add more tests (functional ones) and styled it up and added pages for updating and deleting entries had time permitted and I didn't run into tons of errors with http requests and react & node joining
