# Blog Post API

 This is RESTful API for a blog application developed using Node.js and MongoDB. It uses the Express framework and Mongoose library for the database. It includes a User model and a Blog model, It allows users to create, read, update, and delete blog posts. Users can create an account and log in to the application to create and manage their own blog posts.
 
 ## Features 
 * Allows users to create, update, and delete blog posts
* Supports adding comments to blog posts
* Provides user authentication and authorization for blog post management
* Encrypts user passwords before storing them in the database
* Uses JSON Web Tokens (JWT) for secure user authentication
* Provides an API for accessing and managing user accounts and blog posts
* Populates user details for each blog post, allowing for easy author attribution
* Logs all incoming requests and responses for debugging purposes
* Uses middleware for error handling and responding to unknown endpoints
 
 ## Endpoints 
 * GET /api/blogs - returns all blogs in the database
* POST /api/blogs - adds a new blog to the database
* DELETE /api/blogs/:id - deletes a blog with the given id from the database
* PUT /api/blogs/:id - updates a blog with the given id in the database
* POST /api/blogs/:id/comments - adds a comment to the blog with the given id
* GET /api/users - returns all users in the database
* POST /api/users - adds a new user to the database
* POST /api/login - logs in a user and returns a JSON web token for authentication
 
 
 ## Installation 
 You should use either `npm` or `yarn` but not both. It's recommended to use `yarn` 
 
 * Clone or download the project repository from Github.
 * Open the terminal and navigate to the project folder.
 * Install the required Node.js modules by running the following command:
 
 ```bash
yarn install
```

or for npm 

```bash
npm install
```

* Create a .env file in the root directory of the project and add the following environment variables:

```bash
PORT=<port_number>
MONGODB_URI=<mongodb_uri>
SECRET=<secret_key>
```

* Start the application by running the following command:

 ```bash
yarn start
```
or 

 ```bash
npm run dev
```

## Dependencies
* bcrypt is a library used for password hashing. It is used to securely store user passwords in the database.
* cors is a package used for enabling cross-origin resource sharing. It is used to allow clients from other domains to access the API.
* cross-env is a package used for setting environment variables across different operating systems. It is used to set the NODE_ENV environment variable in the scripts.
* dotenv is a package used for loading environment variables from a .env file. It is used to store sensitive data such as database credentials.
* express is a web application framework for Node.js. It is used to handle HTTP requests and responses.
* express-async-errors is a package used for handling errors asynchronously in Express applications. It is used to catch errors thrown in async/await functions.
* jsonwebtoken is a package used for generating and verifying JSON Web Tokens (JWT). It is used for user authentication and authorization.
* mongoose is a package used for modeling and interacting with MongoDB databases. It is used to define the data schema, create database connections, and execute queries.
* mongoose-unique-validator is a package used for validating unique fields in Mongoose models. It is used to prevent duplicate entries in the database.
* morgan is a package used for logging HTTP requests and responses. It is used for debugging and monitoring.
* jest is a testing framework for Node.js applications. It is used to write and run tests for the application.
* nodemon is a package used for monitoring changes in the application files and automatically restarting the server. It is used for development purposes only.
* supertest is a package used for testing HTTP requests and responses. It is used in combination with Jest to write and run tests for the application.

