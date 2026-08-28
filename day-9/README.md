Day 9 — Promise.all() , Promise.allSettled() + Multiple API Requests


Topics Learned:



* Multiple asynchronous operations
* Promise.all()
* Combining map() with Promise.all()
* Parallel API requests
* Handling multiple API responses
* flatMap()
* Transforming multiple API responses
* Error handling with try...catch
* Working with real API data


 Project:

Neuron Analyzer — Multiple Real API Requests



In this project, I extended the Neuron Analyzer to retrieve multiple real neuron records from the Allen Cell Types Database API.



Instead of requesting all neurons through a single API request, the application sends multiple requests using different specimen IDs and processes them asynchronously with Promise.all().



Data Flow

Real Specimen IDs

&#x20;      ↓

&#x20;     map()

&#x20;      ↓

Multiple getNeuron() calls

&#x20;      ↓

Multiple Promises

&#x20;      ↓

&#x20;  Promise.all()

&#x20;      ↓

Multiple API Responses

&#x20;      ↓

&#x20;   flatMap()

&#x20;      ↓

Raw Neuron Data

&#x20;      ↓

&#x20;   map()

&#x20;      ↓

Clean Neuron Objects

&#x20;      ↓

&#x20;  filter()

&#x20;      ↓

Firing Neurons

&#x20;      ↓

&#x20;   map()

&#x20;      ↓

Firing Names

Fetching Individual Neurons



A reusable function was created to request a specific neuron using its specimen ID:



const getNeuron = async specimenId => {

&#x20;   const response = await fetch(

&#x20;       `https://api.brain-map.org/api/v2/data/query.json?criteria=model::ApiCellTypesSpecimenDetail,rma::criteria,\\\\\\\\\\\\\\\[specimen\\\\\\\\\\\\\\\_\\\\\\\\\\\\\\\_id$eq${specimenId}]`

&#x20;   );



&#x20;   if (!response.ok) {

&#x20;       throw new Error(`HTTP error: ${response.status}`);

&#x20;   }



&#x20;   const data = await response.json();



&#x20;   return data;

};

Multiple API Requests



Three real specimen IDs were used:



const specimenIds = \[

&#x20;   469803127,

&#x20;   320654829,

&#x20;   324257146

];



The requests were started using map():



specimenIds.map(id => getNeuron(id))



This creates an array of Promises.



Promise.all() then waits for all requests to complete:



const results = await Promise.all(

&#x20;   specimenIds.map(id => getNeuron(id))

);



This allows independent API requests to be handled concurrently rather than waiting for each request to finish before starting the next one.



Transforming the API Data



The raw API records were converted into simpler application-specific neuron objects:



const createNeuron = data => ({

&#x20;   specimenId: data.specimen\_\_id,

&#x20;   name: data.specimen\_\_name,

&#x20;   species: data.donor\_\_species,

&#x20;   brainRegion: data.structure\_\_name,

&#x20;   layer: data.structure\_\_layer,

&#x20;   restingPotential: data.ef\_\_vrest,

&#x20;   firingRate: data.ef\_\_avg\_firing\_rate,

&#x20;   tau: data.ef\_\_tau

});

Using flatMap()



Each API response contains neuron data inside msg.



Because there are multiple responses, flatMap() was used to combine the arrays:



const neurons = results

&#x20;   .flatMap(responseData => responseData.msg)

&#x20;   .map(createNeuron);



This converts:



Response 1 → msg\[]

Response 2 → msg\[]

Response 3 → msg\[]



into one array:



Neuron\[]

Analyzing the Neurons



For this learning project, a neuron is considered firing when its firing rate is at least 3 Hz:



const isFiring = neuron => neuron.firingRate >= 3;



The firing neurons are selected using filter():



const firingNeurons = neurons.filter(isFiring);



Their names are then extracted using map():



const firingNames = firingNeurons.map(

&#x20;   neuron => neuron.name

);



The program successfully returned real neuron specimen names from the Allen Cell Types Database.



Example output:



Scnn1a-Tg3-Cre;Ai14-180215.05.02.01

Rorb-IRES2-Cre-D;Ai14-171056.05.01.01

Sst-IRES-Cre;Ai14-173191.06.01.01

Error Handling



All API operations are wrapped in try...catch:



try {

&#x20;   // API requests and analysis

} catch (error) {

&#x20;   console.log(error.message);

}



Individual HTTP responses are also checked with:



if (!response.ok) {

&#x20;   throw new Error(`HTTP error: ${response.status}`);

}

Key Concepts

Promise.all()



Promise.all() waits for multiple Promises to complete.



const results = await Promise.all(\[

&#x20;   promiseA,

&#x20;   promiseB,

&#x20;   promiseC

]);



If all Promises succeed, an array of their results is returned.



If one of them rejects, the Promise.all() operation rejects.



map() + Promise.all()



A common pattern for multiple asynchronous operations is:



await Promise.all(

&#x20;   items.map(item => asyncOperation(item))

);



This pattern is widely used when several independent asynchronous operations can run concurrently.



flatMap()



flatMap() was used to combine the msg arrays from multiple API responses into a single array.



results.flatMap(

&#x20;   responseData => responseData.msg

);

Sequential vs Concurrent Operations

Sequential

for (const id of specimenIds) {

&#x20;   await getNeuron(id);

}



Conceptually:



Request A

&#x20;   ↓

Request B

&#x20;   ↓

Request C

Concurrent

await Promise.all(

&#x20;   specimenIds.map(id => getNeuron(id))

);



Conceptually:



Request A ──┐

Request B ──┼──→ Promise.all()

Request C ──┘



Independent operations can therefore be started without waiting for the previous request to finish.



What I Learned



I learned how to manage multiple asynchronous operations with Promise.all(), how to combine map() with asynchronous functions, how to process multiple API responses with flatMap(), and how to continue transforming and analyzing real neuroscience data using JavaScript array methods.



This project connected several concepts learned throughout the course:



Functions

&#x20;  ↓

Arrow Functions

&#x20;  ↓

Array Methods

&#x20;  ↓

Promises

&#x20;  ↓

async / await

&#x20;  ↓

fetch()

&#x20;  ↓

Real API Data

&#x20;  ↓

Promise.all()

&#x20;  ↓

Multiple API Requests

Data Source



Allen Cell Types Database — Allen Institute



https://api.brain-map.org/



Next Step



Day 10 — More advanced API data processing and asynchronous JavaScript.

