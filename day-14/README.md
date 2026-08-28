# Day 13 — Error Handling



### 

### Topics Learned:

* Custom Errors \& Error Handling
* Error type detection
* Custom Error Classes
* Refactoring + Separation of Concerns







##### Custom Error Class



JavaScript provides a built-in Error class.



A custom error can be created by extending it:



class InvalidNeuronError extends Error {

&#x20;   constructor(message) {

&#x20;       super(message);

&#x20;       this.name = "InvalidNeuronError";

&#x20;   }

}



This creates a specific error type for invalid neuron data.



Instead of receiving a generic Error, the application can identify the problem as an InvalidNeuronError.



##### The Neuron Data



The exercise uses a neuron object:



const neuron = {

&#x20;   name: "Neuron A",

&#x20;   firingRate: "3.5",

&#x20;   restingPotential: -70

};



The firingRate value is intentionally stored as a string:



firingRate: "3.5"



rather than a number:



firingRate: 3.5



This allows the validation logic to detect invalid data.



##### Throwing a Custom Error



The code checks the type of firingRate:



if (typeof neuron.firingRate !== "number") {

&#x20;   throw new InvalidNeuronError("Invalid firing rate");

}



When the condition is true, a new InvalidNeuronError is thrown.



The throw statement immediately stops the current execution of the try block and transfers control to catch.



#### try...catch



Potentially failing code is placed inside a try block:



try {

&#x20;   // code that may throw an error

}



The error is handled inside catch:



catch (error) {

&#x20;   // handle the error

}



This prevents the application from crashing without handling the error.



#### Using instanceof



The instanceof operator can be used to determine the type of error:



if (error instanceof InvalidNeuronError) {

&#x20;   console.log("Neuron problem:", error.message);

} else {

&#x20;   console.log("Unknown error:", error.message);

}



This allows the application to handle different error types differently.



For example:



InvalidNeuronError

&#x20;       ↓

Neuron problem



while an unexpected error can be handled separately.



#### error.name



The custom error defines its name:



this.name = "InvalidNeuronError";



It can then be accessed with:



console.log(error.name);



Output:



InvalidNeuronError



#### error.message



The error message is defined when the error is created:



throw new InvalidNeuronError("Invalid firing rate");



The message can then be accessed with:



console.log(error.message);



Output:



Invalid firing rate



#### finally



The finally block is executed regardless of whether an error occurs:



finally {

&#x20;   console.log("Analysis finished");

}



This is useful for operations that should always happen after the process finishes.



For example:



Validation started

&#x20;     ↓

try

&#x20;     ↓

error?

&#x20;  ↙     ↘

yes      no

&#x20;↓        ↓

catch     continue

&#x20;  ↘     ↙

&#x20;  finally

&#x20;     ↓

finished

Example Output



Because firingRate is a string instead of a number, the custom error is triggered.



Expected output:



Neuron problem: Invalid firing rate

InvalidNeuronError

Invalid firing rate

Analysis finished

Key Takeaways

Custom Error

class InvalidNeuronError extends Error {

&#x20;   constructor(message) {

&#x20;       super(message);

&#x20;       this.name = "InvalidNeuronError";

&#x20;   }

}

Throw

throw new InvalidNeuronError("Invalid firing rate");

Catch

catch (error) {

&#x20;   console.log(error.message);

}

Detect Error Type

error instanceof InvalidNeuronError

Error Information

error.name

error.message

Finally

finally {

&#x20;   // always executed

}

Project Context



This exercise makes the Neuron Analyzer more robust by introducing specific error types.



Instead of treating every problem as a generic error, the application can now distinguish between different categories of failures.



This approach becomes particularly useful as the project grows and starts handling more complex API and data-validation scenarios.

