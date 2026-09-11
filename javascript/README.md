\# JavaScript Learning



This folder contains the first stage of my JavaScript learning journey.



The learning process was structured as \*\*18 progressive days\*\*, with each stage introducing new JavaScript concepts and applying them to the evolving \*\*Neuron Analyzer\*\* project.



The goal was not to complete unrelated exercises, but to continuously develop one project while gradually introducing more advanced JavaScript concepts.



\---



\# Day 1 — JavaScript Fundamentals



Topics:



\* Node.js

\* VS Code

\* Git \& GitHub

\* Variables

\* Data Types

\* Operators

\* Conditions

\* Basic JavaScript syntax



\---



\# Day 2 — Functions \& Modern JavaScript



Topics:



\* Functions

\* Parameters

\* Return values

\* Scope

\* Arrow Functions

\* Arrays

\* Objects

\* Destructuring

\* Spread \& Rest

\* Modules

\* Callback Functions



\---



\# Day 3 — Arrays \& Data Transformation



Topics:



\* Arrays of Objects

\* `filter()`

\* `map()`

\* `reduce()`

\* Object Methods

\* Data Transformation



\---



\# Day 4 — Data Processing \& Validation



Topics:



\* Array validation

\* Working with arrays of objects

\* Data processing

\* Immutability



\---



\# Day 5 — Callbacks \& Higher-Order Functions



Topics:



\* Functions as arguments

\* Callback Functions

\* Higher-Order Functions

\* Returning Functions

\* Function Composition

\* Reusable Functions



\---



\# Day 6 — Closures \& Encapsulation



Topics:



\* Closures

\* IIFE

\* Encapsulation

\* Private state concepts



\---



\# Day 7 — Asynchronous JavaScript



Topics:



\* Asynchronous programming

\* Promises

\* `resolve()`

\* `reject()`

\* `async`

\* `await`

\* Sequential asynchronous operations



\---



\# Day 8 — APIs \& Fetch



The Neuron project moved from hard-coded data toward real neuroscience data.



Topics:



\* APIs

\* HTTP requests

\* Fetch API

\* JSON

\* API responses

\* Data transformation



\---



\# Day 9 — Multiple API Requests



Topics:



\* `Promise.all()`

\* `Promise.allSettled()`

\* Multiple asynchronous requests

\* Handling successful and failed requests



\---



\# Day 10 — Testing \& Refactoring



Topics:



\* Testing concepts

\* DRY

\* Single Responsibility

\* Refactoring

\* Reusable code



\---



\# Day 11 — npm \& Object-Oriented Programming



Topics:



\* npm

\* `package.json`

\* Dependencies

\* `devDependencies`

\* Classes

\* Constructors

\* Methods

\* Separation of Responsibility



\---



\# Day 12 — OOP Design



Topics:



\* Composition

\* Inheritance

\* Polymorphism



\---



\# Day 13 — Static Members



Topics:



\* Static Methods

\* Static Properties

\* Class-level functionality



\---



\# Day 14 — Error Handling



Topics:



\* Errors

\* `try / catch`

\* Error handling strategies

\* Custom errors



\---



\# Day 15 — DOM \& Events



Topics:



\* DOM Manipulation

\* Event Handling

\* Forms

\* GET

\* POST

\* PUT

\* DELETE



\---



\# Day 16 — Advanced JavaScript Concepts



Topics:



\* `this`

\* Higher-Order Functions

\* Closures

\* Callbacks

\* Event Loop



\---



\# Day 17 — Browser Storage



Topics:



\* LocalStorage

\* SessionStorage

\* Persisting browser-side data



\---



\# Day 18 — Node.js Introduction



Topics:



\* Node.js runtime

\* File System

\* `fs`

\* `path`

\* `process`

\* npm

\* `package.json`

\* ES Modules

\* Import / Export



\---



\# Neuron Analyzer — Real API Project



The JavaScript learning journey evolved into a practical project called \*\*Neuron Analyzer\*\*.



The project uses the \*\*Allen Cell Types Database API\*\* from the Allen Institute to retrieve real neuroscience data.



The API provides information about human and mouse cells, including electrophysiological and anatomical data.



\## Project Evolution



```text

Hard-coded neuron data

&#x20;       ↓

JavaScript data processing

&#x20;       ↓

Functions

&#x20;       ↓

Array methods

&#x20;       ↓

Higher-Order Functions

&#x20;       ↓

Closures \& Modules

&#x20;       ↓

Asynchronous JavaScript

&#x20;       ↓

Promises

&#x20;       ↓

async / await

&#x20;       ↓

Fetch API

&#x20;       ↓

Allen Cell Types Database

&#x20;       ↓

Real neuroscience data

&#x20;       ↓

Neuron analysis

```



\## Data Transformation



The API response contains many fields.



The project extracts the fields needed for the application:



```js

{

&#x20;   name,

&#x20;   species,

&#x20;   brainRegion,

&#x20;   layer,

&#x20;   restingPotential,

&#x20;   firingRate,

&#x20;   tau

}

```



Example:



```js

{

&#x20;   name: "H15.06.017.03.04.01",

&#x20;   species: "Homo Sapiens",

&#x20;   brainRegion: "middle temporal gyrus",

&#x20;   layer: "3",

&#x20;   restingPotential: -71.31,

&#x20;   firingRate: 3.116,

&#x20;   tau: 24.02

}

```



\## Analysis



The project demonstrates:



\* Retrieving real data from an API

\* Parsing JSON responses

\* Transforming API data

\* Filtering neurons

\* Mapping data into application objects

\* Calculating total firing rate

\* Calculating average firing rate

\* Working with real-world datasets



For the learning project, a neuron is considered "firing" when:



```js

neuron.firingRate >= 3

```



This is an educational criterion for practicing data processing and is not intended as a clinical or scientific definition.



\---



\# Architecture



The JavaScript version of the project follows this general flow:



```text

Allen Cell Types API

&#x20;       ↓

fetch()

&#x20;       ↓

JSON Response

&#x20;       ↓

Data Transformation

&#x20;       ↓

Neuron Objects

&#x20;       ↓

filter()

&#x20;       ↓

map()

&#x20;       ↓

reduce()

&#x20;       ↓

Neuron Statistics

```



\---



\# Purpose of This Folder



The `javascript/` folder documents the foundational stage of the learning journey.



The concepts learned here became the foundation for the next stages of the project:



```text

JavaScript

&#x20;   ↓

Node.js

&#x20;   ↓

Express

&#x20;   ↓

REST API

&#x20;   ↓

SQLite

&#x20;   ↓

React

&#x20;   ↓

Full-Stack Neuron Application

```



Each day represents a step in the progression from JavaScript fundamentals toward practical Software Engineering and full-stack web development.



