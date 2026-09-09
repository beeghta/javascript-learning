# Day 10 — Authentication \& Authorization with JWT



###### **Topics Learned:**



* install JWT
* install bcrypt
* Auth Route
* JWT
* JWT payload
* JWT expiration
* Bearer Token
* Authorization header
* jwt.sign()
* jwt.verify()
* Password hashing
* bcrypt
* Role-based access control
* 401 Unauthorized
* 403 Forbidden
* Authentication middleware
* Authorization middleware
* Protected routes
* request.user



###### **Technologies**



\- Node.js

\- Express.js

\- SQLite

\- better-sqlite3

\- bcrypt

\- JSON Web Token (JWT)

\- dotenv

\- REST API

\- Middleware



Authentication verifies the identity of the user.

Two roles are supported:

user

admin



Permissions for user:

View neurons

Search neurons

View neuron status



Permissions for Admin:

Create neuron

Update neuron

Delete neuron

View neurons

Search neurons

View neuron status



**The JWT contains:**

{

&#x20;   id: user.id,

&#x20;   username: user.username,

&#x20;   role: user.role

}



###### **Architecture**



&#x20;                   Client

&#x20;                     │

&#x20;                     ▼

&#x20;               Express API

&#x20;                     │

&#x20;         ┌───────────┴───────────┐

&#x20;         │                       │

&#x20;      Login                  Neuron API

&#x20;         │                       │

&#x20;         ▼                       ▼

&#x20;   Auth Controller        authMiddleware

&#x20;         │                       │

&#x20;         ▼                       ▼

&#x20;      SQLite               JWT verify

&#x20;         │                       │

&#x20;         ▼                       ▼

&#x20;      bcrypt                request.user

&#x20;                                 │

&#x20;                        ┌────────┴────────┐

&#x20;                        │                 │

&#x20;                      user              admin

&#x20;                        │                 │

&#x20;                       READ          READ + WRITE

