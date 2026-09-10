# **Node.js learning**



A RESTful API built with Node.js, Express, SQLite, Jest, and Supertest as a practical backend learning project.



The project started as a simple Node.js API and gradually evolved into a structured backend application with routing, controllers, services, database persistence, validation, error handling, authentication concepts, API versioning, and automated testing.



\---



#### &#x20;**Technologies**



* &#x20;Node.js
* &#x20;Express.js
* &#x20;SQLite
* &#x20;better-sqlite3
* &#x20;Jest
* &#x20;Supertest
* &#x20;JSON Web Token (JWT)
* &#x20;bcrypt
* &#x20;CORS
* &#x20;dotenv
* &#x20;ES Modules



\---



#### &#x20;**Project Structure**



day-12/

│

├── controllers/

│   └── neuronController.js

│

├── database/

│   ├── database.js

│   ├── neuronDatabase.js

│   ├── userDatabase.js

│   └── seedUser.js

│

├── errors/

│   └── AppError.js

│

├── middleware/

│   ├── asyncHandler.js

│   ├── authMiddleware.js

│   ├── requireRole.js

│   └── validateNeuron.js

│

├── models/

│

├── routes/

│   └── neuronRoutes.js

│

├── services/

│   └── neuronService.js

│

├── tests/

│   ├── setup.js

│   ├── neuron.test.js

│   └── neuronService.test.js

│

├── config/

│   └── config.js

│

├── docs/

│   └── API.md

│

├── .env

├── .env.example

├── index.js

├── package.json

└── package-lock.json





\---



#### &#x20;**Project Architecture**



The application follows a layered architecture:



Client

&#x20; │

&#x20; ▼

Routes

&#x20; │

&#x20; ▼

Controllers

&#x20; │

&#x20; ▼

Services

&#x20; │

&#x20; ▼

Database

&#x20; │

&#x20; ▼

SQLite





Each layer has a specific responsibility.



&#x20;Routes



Define API endpoints and connect requests to controllers.



&#x20;Controllers



Handle HTTP requests and responses.



&#x20;Services



Contain the application's business logic and provide an abstraction between controllers and the database.



&#x20;Database



Handles SQL queries and SQLite persistence.



&#x20;Middleware



Provides reusable functionality such as validation, authentication, authorization, and asynchronous error handling.



\---



\#  What I Learned



\## 1. Node.js Fundamentals



\* Running JavaScript outside the browser

\* Node.js modules

\* ES Modules

\* `package.json`

\* npm

\* `process`

\* `fs`

\* `path`

\* Reading and writing files

\* Working with JSON

\* Environment variables



\---



\## 2. HTTP Server



Built a basic HTTP server using Node's built-in `http` module.



Learned:



\* Request and response

\* HTTP methods

\* HTTP status codes

\* Headers

\* JSON responses

\* URL parsing

\* Basic routing



\---



\## 3. REST API



Implemented CRUD operations:



```text

GET     /api/v1/neurons

GET     /api/v1/neurons/:id

POST    /api/v1/neurons

PUT     /api/v1/neurons/:id

DELETE  /api/v1/neurons/:id

```



Additional endpoints:



```text

GET /api/v1/neurons/firing

GET /api/v1/neurons/search

GET /api/v1/neurons/:id/status

```



\---



\#  Express.js



The API was migrated from Node's built-in HTTP server to Express.



Learned:



\* `express()`

\* `app.get()`

\* `app.post()`

\* `app.put()`

\* `app.delete()`

\* `app.use()`

\* `express.json()`

\* `request.body`

\* `request.params`

\* `request.query`

\* `response.json()`

\* `response.status()`



\---



\#  Express Router



Routes were separated from the main application.



Example:



```js

app.use("/api/v1/neurons", neuronRoutes);

```



Inside the router:



```text

/

&#x20;/firing

&#x20;/search

&#x20;/:id

&#x20;/:id/status

```



This keeps the main application file smaller and makes the API easier to maintain.



\---



\#  Middleware



Implemented reusable middleware for:



\* Request logging

\* Request validation

\* Authentication

\* Authorization

\* Async error handling



Example validation:



```js

const validateNeuron = (request, response, next) => {

&#x20;   const { name, activity } = request.body;



&#x20;   if (!name || typeof name !== "string") {

&#x20;       response.status(400).json({

&#x20;           success: false,

&#x20;           error: "Name is required and must be a string"

&#x20;       });

&#x20;       return;

&#x20;   }



&#x20;   if (

&#x20;       typeof activity !== "number" ||

&#x20;       activity < 0 ||

&#x20;       activity > 1

&#x20;   ) {

&#x20;       response.status(400).json({

&#x20;           success: false,

&#x20;           error: "Activity must be a number between 0 and 1"

&#x20;       });

&#x20;       return;

&#x20;   }



&#x20;   next();

};

```



\---



\#  Error Handling



Implemented centralized error handling.



Custom errors use `AppError`:



```js

class AppError extends Error {

&#x20;   constructor(message, statusCode) {

&#x20;       super(message);

&#x20;       this.statusCode = statusCode;

&#x20;   }

}

```



Errors are passed through middleware using:



```js

next(error);

```



The API returns structured error responses:



```json

{

&#x20;   "success": false,

&#x20;   "error": "Neuron not found"

}

```



Common status codes:



```text

200  OK

201  Created

204  No Content

400  Bad Request

404  Not Found

500  Internal Server Error

```



\---



\#  SQLite Database



The original in-memory / JSON-based persistence was replaced with SQLite.



Database table:



```sql

CREATE TABLE IF NOT EXISTS neurons (

&#x20;   id INTEGER PRIMARY KEY AUTOINCREMENT,

&#x20;   name TEXT NOT NULL,

&#x20;   activity REAL NOT NULL

);

```



Database operations include:



\* Create neuron

\* Get all neurons

\* Get neuron by ID

\* Update neuron

\* Delete neuron

\* Find firing neurons

\* Search neurons

\* Get neuron status

\* Count neurons

\* Pagination



SQL uses prepared statements to safely pass values:



```js

const statement = db.prepare(`

&#x20;   SELECT \* FROM neurons

&#x20;   WHERE id = ?

`);



return statement.get(id);

```



\---



\#  Pagination



The API supports pagination:



```text

GET /api/v1/neurons?page=1\&limit=10

```



Example response:



```json

{

&#x20;   "success": true,

&#x20;   "data": \[],

&#x20;   "pagination": {

&#x20;       "page": 1,

&#x20;       "limit": 10,

&#x20;       "total": 25,

&#x20;       "totalPages": 3

&#x20;   }

}

```



\---



\#  Search and Filtering



The API supports filtering neurons based on activity:



```text

GET /api/v1/neurons/search?minActivity=0.8

```



Sorting is also supported:



```text

sort=activity

sort=-activity

```



\---



\#  Authentication \& Authorization



Authentication concepts were implemented using:



\* JWT

\* bcrypt

\* Users table

\* Authentication middleware

\* Role-based authorization



The project distinguishes between authenticated users and users with administrative privileges.



For example:



```text

GET      → normal authenticated user

POST     → admin

PUT      → admin

DELETE   → admin

```



Authentication routes and database functionality were developed as part of the learning process.



\---



\#  CORS



CORS was added to allow the API to receive requests from different origins.



```js

import cors from "cors";



app.use(cors());

```



\---



\#  Environment Configuration



Environment variables are used for configuration.



Example:



```env

PORT=4000

JWT\_SECRET=your\_secret\_here

```



Sensitive `.env` files are excluded from Git.



An `.env.example` file is included as a template.



\---



\#  Testing

Automated testing was added using:



\* Jest

\* Supertest





Mocking

Integration Testing



\---



\#  Learning Goals



This project was created as a practical way to develop backend development skills while building a portfolio project.



The main goals are:



\* Understand Node.js fundamentals

\* Build REST APIs

\* Learn Express.js

\* Understand backend architecture

\* Work with SQL databases

\* Separate application layers

\* Handle errors correctly

\* Implement validation

\* Understand authentication and authorization

\* Write automated tests

\* Understand mocking

\* Practice API integration testing

\* Build a project that can be extended into a production-style application



\---



\#  Next Steps



The next stage of the learning path is focused on frontend development and modern JavaScript technologies:



```text

Node.js

&#x20;  ↓

Express

&#x20;  ↓

REST API

&#x20;  ↓

Testing

&#x20;  ↓

React

```



The Neuron project will eventually be extended with a React frontend that communicates with this API.





