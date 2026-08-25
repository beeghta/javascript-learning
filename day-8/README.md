Day 8 — Working with APIs \& Fetch



Topics Learned:

* APIs and HTTP requests
* fetch()
* async / await with API requests
* HTTP response handling
* response.ok
* response.json()
* Working with JSON data
* Inspecting API response structure
* Transforming external API data into application objects
* map()
* filter()
* reduce()
* Processing real-world data

##### 

### Project:

##### Neuron Analyzer — Real Neuroscience Data

##### 

In this project, I connected JavaScript to the Allen Cell Types Database API and worked with real neuroscience data instead of hard-coded neuron objects. The application retrieves real cell data, transforms the API response into a simplified neuron structure, identifies neurons based on firing rate, and calculates basic statistics.



Data Source



Allen Cell Types Database — Allen Institute



The project uses real cell data from the Allen Brain Atlas / Allen Cell Types Database.



API endpoint:



https://api.brain-map.org/api/v2/data/query.json?criteria=model::ApiCellTypesSpecimenDetail,rma::options\[num\_rows$eq10]

Data Flow

Allen Cell Types API

&#x20;       ↓

fetch()

&#x20;       ↓

HTTP Response

&#x20;       ↓

response.json()

&#x20;       ↓

API Response Object

&#x20;       ↓

data.msg

&#x20;       ↓

map(createNeuron)

&#x20;       ↓

Clean Neuron Objects

&#x20;       ↓

filter(isFiring)

&#x20;       ↓

map() + reduce()

&#x20;       ↓

Neuron Statistics

Fetching Data



The API data is retrieved asynchronously using fetch():



const getNeurons = async () => {

&#x20;   const response = await fetch(

&#x20;       `https://api.brain-map.org/api/v2/data/query.json?criteria=model::ApiCellTypesSpecimenDetail,rma::options\\\\\\\[num\\\\\\\_rows$eq10]`

&#x20;   );



&#x20;   if (!response.ok) {

&#x20;       throw new Error(`HTTP error: ${response.status}`);

&#x20;   }



&#x20;   const data = await response.json();



&#x20;   return data;

};

Transforming API Data



The raw API response contains many fields that are not required by the application.



I created a separate function to transform the raw data into a simpler Neuron object:



const createNeuron = data => {

&#x20;   return {

&#x20;       name: data.specimen\_\_name,

&#x20;       species: data.donor\_\_species,

&#x20;       brainRegion: data.structure\_\_name,

&#x20;       layer: data.structure\_\_layer,

&#x20;       restingPotential: data.ef\_\_vrest,

&#x20;       firingRate: data.ef\_\_avg\_firing\_rate,

&#x20;       tau: data.ef\_\_tau

&#x20;   };

};



This separates the external API structure from the application's internal data structure.



Analyzing Neurons



For this project, a neuron was considered "firing" when its recorded average firing rate was at least 3 Hz.



const isFiring = neuron => {

&#x20;   return neuron.firingRate >= 3;

};



The neurons were then filtered using filter():



const firingNeurons = neurons.filter(isFiring);

Using map()



The names of firing neurons were extracted using map():



const firingNames = firingNeurons.map(

&#x20;   neuron => neuron.name

);

Using reduce()



The total firing rate was calculated using reduce():



const totalFiringRate = firingNeurons.reduce(

&#x20;   (sum, neuron) => sum + neuron.firingRate,

&#x20;   0

);



The average firing rate was then calculated:



const averageFiringRate =

&#x20;   totalFiringRate / firingNeurons.length;

Error Handling



API errors are handled using response.ok and try...catch:



try {

&#x20;   const responseData = await getNeurons();



&#x20;   // Process data...



} catch (error) {

&#x20;   console.log(error.message);

}

Key Concepts

fetch()



fetch() is used to make HTTP requests from JavaScript.



It returns a Promise, which means it can be used with async/await.



response.json()



The API response is converted from JSON into a JavaScript object:



const data = await response.json();

response.ok



The response status is checked before processing the data:



if (!response.ok) {

&#x20;   throw new Error(`HTTP error: ${response.status}`);

}

Data Transformation



Instead of working directly with the large API response, the application extracts only the fields it needs.



Raw API Data

&#x20;    ↓

createNeuron()

&#x20;    ↓

Application Data

Array Methods



The project combines several JavaScript array methods:



map()

&#x20; ↓

Transform data



filter()

&#x20; ↓

Select data



reduce()

&#x20; ↓

Calculate data

What I Learned



I learned how to connect JavaScript to a real external API, retrieve asynchronous data using fetch(), inspect and understand an API response, transform external data into application-specific objects, and analyze real-world data using JavaScript array methods.



This project also connected concepts from previous days:



Functions

&#x20;  +

Arrow Functions

&#x20;  +

Promises

&#x20;  +

async/await

&#x20;  +

fetch()

&#x20;  +

map()

&#x20;  +

filter()

&#x20;  +

reduce()

Project Result



The project evolved from a simple hard-coded neuron analyzer into an application that processes real neuroscience data from the Allen Cell Types Database.



Real Neuroscience Data

&#x20;       ↓

JavaScript

&#x20;       ↓

Neuron Analyzer

&#x20;       ↓

Firing Neurons

&#x20;       ↓

Statistical Analysis

##### 



##### Next Step



Neuron Analyzer

│

├── Fetch real neurons

├── Filter by brain region

├── Filter by species

├── Analyze firing rate

├── Analyze resting potential

├── Sort neurons

└── Generate report



Day 9 — Working with multiple asynchronous API requests and Promise.all().

