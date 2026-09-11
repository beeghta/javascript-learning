# JavaScript

The JavaScript stage focused on building a strong foundation in modern JavaScript through the continuous development of the Neuron project.

### Main Topics

* JavaScript Fundamentals
* Variables, Data Types & Operators
* Conditions & Control Flow
* Functions, Scope & Arrow Functions
* Arrays & Objects
* Array Methods: `map()`, `filter()`, `find()`, `reduce()`
* Destructuring
* Spread & Rest Operators
* Immutability
* Higher-Order Functions
* Callback Functions
* Closures
* IIFE & Encapsulation
* JavaScript Modules
* `this`
* Event Loop
* Asynchronous JavaScript
* Promises
* `async / await`
* `Promise.all()` & `Promise.allSettled()`
* Fetch API
* REST API concepts
* DOM Manipulation
* Event Handling
* Forms
* LocalStorage & SessionStorage
* Error Handling
* Object-Oriented Programming
* Classes, Constructors & Methods
* Composition, Inheritance & Polymorphism
* Static Methods & Properties
* Testing & Refactoring
* DRY & Single Responsibility
* Git & GitHub

The JavaScript stage also introduced real-world API integration through the **Allen Cell Types Database**, allowing the Neuron project to work with real neuroscience data rather than only hard-coded data.

The detailed progression of this stage is documented in the [`javascript/`](./javascript/) folder.


---

# Node.js / Backend

The Node.js section progressed from core Node.js concepts to a complete REST API.

Main topics:

* Node.js fundamentals
* ES Modules
* File system
* HTTP server
* HTTP methods
* Routing
* REST API
* Express
* Express Router
* Middleware
* Request validation
* Error handling
* Service layer
* Separation of Concerns
* SQLite
* SQL queries
* CRUD
* Pagination
* Search
* API versioning
* CORS
* Environment variables
* Authentication concepts
* Jest
* Supertest
* Mocking
* Integration testing
* Test database

---

# React

The React section focuses on building a frontend for the existing Neuron REST API.

Current topics:

* Vite
* Components
* JSX
* Props
* `map()`
* `key`
* Conditional rendering
* Event handling
* `useState`
* `useEffect`
* Controlled inputs
* Forms
* Validation
* Fetch API
* GET
* POST
* PUT
* DELETE
* Loading states
* Error states
* Parent-child communication
* Frontend/backend integration

---

# Repository Structure

```text
javascript-learning/
│
├── javascript/
│   └── JavaScript learning exercises and projects
│
├── nodejs/
│   └── day-9/
│       ├── controllers/
│       ├── database/
│       ├── errors/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       ├── services/
│       ├── tests/
│       ├── index.js
│       └── package.json
│
└── react/
    ├── src/
    ├── public/
    ├── package.json
    └── README.md
```

---

# Learning Approach

Each stage combines:

* New programming concepts
* Practical coding
* Improvements to the same project
* Git and GitHub practice
* Refactoring
* Real API integration
* Backend development
* Frontend development

The project is intentionally developed incrementally so that each new technology builds on concepts learned previously.

---

# Current Architecture

```text
Allen Cell Types API
        ↓
JavaScript Data Processing
        ↓
Node.js
        ↓
Express REST API
        ↓
SQLite
        ↑
        │
      HTTP
        │
        ↓
React Neuron Dashboard
```

The current goal is to continue developing the Neuron application while strengthening practical skills in **JavaScript, Software Engineering, Backend Development, and React**.

---

# Purpose

This repository documents my transition from traditional web development toward modern JavaScript and Software Engineering.

The project combines programming practice with my interest in neuroscience and provides a practical way to learn software development through one continuously evolving application.

Rather than treating each technology as an isolated subject, this repository demonstrates the progression from JavaScript fundamentals to a working full-stack application.
