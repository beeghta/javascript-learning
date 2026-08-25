## Day 7 — Set Timeout And Promise \& Async/Await



###### **Topics Learned:**

* Synchronous
* Callback - Async operation
* Event Loop
* Promise
* resolve() and reject()
* Promise states: Pending, Fulfilled, Rejected
* .then()
* .catch()
* async functions
* await
* Error handling with try...catch
* Sequential asynchronous operations
* Using await inside for...of
* Difference between asynchronous execution and sequential await

Project

Neuron Analyzer — Async Neuron Analysis



In this project, I used JavaScript Promises and async/await to simulate asynchronous neuron analysis.



Each neuron is checked asynchronously based on its membrane potential and firing threshold.



Neuron

&#x20;  ↓

checkNeuron()

&#x20;  ↓

Promise

&#x20;  ↓

resolve / reject

&#x20;  ↓

async / await

&#x20;  ↓

Neuron analysis result

Example



The neuron is checked asynchronously using a Promise:



const checkNeuron = neuron => {

&#x20;   return new Promise((resolve, reject) => {

&#x20;       setTimeout(() => {

&#x20;           if (neuron.potential >= neuron.threshold) {

&#x20;               resolve(`${neuron.name} fired!`);

&#x20;           } else {

&#x20;               reject(`${neuron.name} did not fire.`);

&#x20;           }

&#x20;       }, 1000);

&#x20;   });

};



The analysis is performed sequentially with async/await:



const analyzeNeurons = async neurons => {

&#x20;   for (const neuron of neurons) {

&#x20;       try {

&#x20;           const result = await checkNeuron(neuron);

&#x20;           console.log(result);

&#x20;       } catch (error) {

&#x20;           console.log(error);

&#x20;       }

&#x20;   }

};

Key Concepts

Promise



A Promise represents the eventual result of an asynchronous operation.



A Promise can be:



Pending

Fulfilled

Rejected

resolve()



Used when the asynchronous operation succeeds.



resolve(`${neuron.name} fired!`);

reject()



Used when the operation fails or does not produce the expected result.



reject(`${neuron.name} did not fire.`);

async / await



async/await provides a cleaner way to work with Promises.



const result = await checkNeuron(neuron);



The await pauses the execution of the current async function until the Promise settles, without blocking the entire JavaScript program.



Error Handling



Errors from a rejected Promise can be handled using try...catch:



try {

&#x20;   const result = await checkNeuron(neuron);

&#x20;   console.log(result);

} catch (error) {

&#x20;   console.log(error);

}

Sequential Processing



Using await inside a for...of loop allows each neuron to be processed after the previous asynchronous operation has completed.



Neuron A

&#x20;  ↓

wait for result

&#x20;  ↓

Neuron B

&#x20;  ↓

wait for result

&#x20;  ↓

Neuron C

What I Learned



I learned how JavaScript handles asynchronous operations using Promises and async/await, how to handle successful and failed operations, and how to process asynchronous tasks sequentially.



Next Step



Day 8 — Working with APIs and fetch().

