## JavaScript Learning Journey



A practical JavaScript learning journey focused on learning modern JavaScript through a single evolving project: Neuron Analyzer.



The project started with simple hard-coded neuron data and gradually evolved into an application that retrieves and analyzes real neuroscience data from the Allen Cell Types Database API.



#### Projects: Neuron Analyzer



A small project used throughout the learning journey to apply

JavaScript concepts to a simple neuron simulation.



#### Goal



The goal of this repository is to build a strong foundation in modern JavaScript through practical, incremental development.



Instead of learning JavaScript through many unrelated exercises, I am developing one continuous project and applying each new concept to the Neuron Analyzer.



The long-term goal is to use these skills for:



* Software Engineering
* Web Development
* React
* Node.js
* API Development
* Real-world data processing

#### 

###### Main Project — Neuron Analyzer



Neuron Analyzer is an evolving JavaScript project for retrieving, transforming, and analyzing neuron data.



Project evolution

Hard-coded neuron data

&#x20;       ↓

JavaScript Functions

&#x20;       ↓

Array Methods

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

Real API

&#x20;       ↓

Real Neuroscience Data

&#x20;       ↓

Neuron Analysis





### Real Neuroscience API



The project now uses the Allen Cell Types Database API from the Allen Institute.



The API provides real neuroscience data from human and mouse cells, including electrophysiological and anatomical information.



Data source



Allen Cell Types Database



API:



https://api.brain-map.org/api/v2/data/query.json?criteria=model::ApiCellTypesSpecimenDetail,rma::options\[num\_rows$eq10]



The project retrieves real cell data and transforms the API response into simplified application-specific Neuron objects.



#### Current Neuron Data Model



The raw API contains many fields. The project extracts the fields that are currently relevant:



{

&#x20;   name,

&#x20;   species,

&#x20;   brainRegion,

&#x20;   layer,

&#x20;   restingPotential,

&#x20;   firingRate,

&#x20;   tau

}



Example:



{

&#x20;   name: "H15.06.017.03.04.01",

&#x20;   species: "Homo Sapiens",

&#x20;   brainRegion: "middle temporal gyrus",

&#x20;   layer: "3",

&#x20;   restingPotential: -71.31,

&#x20;   firingRate: 3.116,

&#x20;   tau: 24.02

}



##### Current Analysis



The project currently demonstrates how to:



Retrieve real neuron data from an API

Transform API data into application objects

Filter neurons by firing rate

Extract neuron names

Calculate total firing rate

Calculate average firing rate



For the current learning exercise, a neuron is considered "firing" when: neuron.firingRate >= 3



This is an educational criterion used for practicing JavaScript data processing and is not intended as a clinical or scientific definition of neuronal firing.

#### 

#### Learning Approach



Each day combines:



\- New JavaScript concepts

\- Practical coding

\- Project improvements

\- Git and GitHub practice



#### Learning Roadmap



Day 1 Topics: JavaScript Fundamentals: Node.js - VS Code - Git \& GitHub - Variables - Data Types - Operators - Conditions - Basic JavaScript syntax



Day 2 Topics: Functions, Parameters, Return values, Scope \& Arrow Functions, Array Methods, Objects \& Destructuring, Spread \& Rest, Modules, Callback Functions

Array of Objects, filter(), map(), reduce().



Day 3 Topics: arrays objects and data transformation: Advanced Array Methods, Object Methods, Immutability, Nested Objects \& Arrays, Data Transformation.



Day 4 Array Validation \& Data Processing: Data validation, Working with arrays of objects.



Day 5 Callback, Closure, Higher-Order Functions: Functions as arguments, Callback functions, Returning functions, Function composition, Reusable functions



Day 6 Closures, IIFE \& Encapsulation 



Day 7 Asynchronous JavaScript \& Promises \& async/await: Promises, resolve(), reject(), async, await, Sequential asynchronous operations





Day 8 APIs \& Fetch **Project**: Real Neuroscience Neuron Analyzer. The project moved from hard-coded neuron data to real data retrieved from the Allen Cell Types Database API.



Current architecture:



Allen API

&#x20;  ↓

fetch()

&#x20;  ↓

JSON Response

&#x20;  ↓

data.msg

&#x20;  ↓

createNeuron()

&#x20;  ↓

Neuron Objects

&#x20;  ↓

filter()

&#x20;  ↓

map()

&#x20;  ↓

reduce()

&#x20;  ↓

Neuron Statistics



## 

## Purpose



This repository documents my transition from traditional web development toward modern JavaScript and Software Engineering.



The project combines programming practice with my interest in neuroscience and provides a practical way to learn JavaScript through a continuously evolving application.

