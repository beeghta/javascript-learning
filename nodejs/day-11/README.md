# Day 11 — Jest + Supertest



**Testing project:**

Automated testing was added using:



\* Jest

\* Supertest



The API tests cover the main REST operations and error cases.



Examples include:



```text

GET all neurons

GET neuron by ID

GET unknown neuron

POST neuron

POST invalid neuron

PUT neuron

PUT invalid neuron

DELETE neuron

GET firing neurons

Search neurons

Get neuron status

```



\---



\## Jest



Jest was also used for unit testing.



Topics practiced:



\* `test()`

\* `describe()`

\* `beforeEach()`

\* `afterAll()`

\* `expect()`

\* Mock functions

\* Mock return values

\* Mock rejected values

\* Mock implementations



Example:



```js

const mockGetNeuronById = jest.fn();



mockGetNeuronById.mockReturnValue({

\&#x20;   id: 101,

\&#x20;   name: "Mock Neuron",

\&#x20;   activity: 0.95

});

```



Mocking allows the Service Layer to be tested independently from the real database.



\---



\## Mocking



Several Jest mocking techniques were practiced:



```js

jest.fn()

```



```js

mockReturnValue()

```



```js

mockReturnValueOnce()

```



```js

mockRejectedValue()

```



```js

mockImplementation()

```



Mock call assertions:



```js

toHaveBeenCalledTimes()

```



```js

toHaveBeenCalledWith()

```



```js

toHaveBeenNthCalledWith()

```



Mocks are cleared between tests:



```js

beforeEach(() => {

\&#x20;   jest.clearAllMocks();

});

```



\---



\#  Integration Testing



Supertest is used to test the API through Express.



Example:



```js

const response = await request(app)

\&#x20;   .get("/api/v1/neurons");



expect(response.status).toBe(200);

```



This allows multiple layers to be tested together:



```text

Supertest

\&#x20;   ↓

Express

\&#x20;   ↓

Router

\&#x20;   ↓

Controller

\&#x20;   ↓

Service

\&#x20;   ↓

SQLite

```



\---



\#  Test Coverage



Jest can generate a coverage report:



```powershell

npm.cmd run test:coverage

```



Coverage helps identify which parts of the application are exercised by the tests.



The main coverage categories are:



```text

Statements

Branches

Functions

Lines

```



High coverage is useful, but coverage percentage alone does not guarantee good tests.



\---



\#  Running the Project



Install dependencies:



```powershell

npm.cmd install

```



Start the API:



```powershell

npm.cmd start

```



Run tests:



```powershell

npm.cmd test

```



Run tests with coverage:



```powershell

npm.cmd run test:coverage

```



The API runs on the configured port.



