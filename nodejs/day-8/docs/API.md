\#Neuron API



Base URL:



http://localhost:4000/api/v1/neurons



Get All Neurons:

GET /api/v1/neurons

Query Parameters: page , limit

&#x09;example:GET /api/v1/neurons?page=1\&limit=2

&#x09;Response : 

{

&#x20; "success": true,

&#x20; "data": \[

&#x20;   {

&#x20;     "id": 1,

&#x20;     "name": "Neuron Alpha",

&#x20;     "activity": 0.95

&#x20;   },

&#x20;   {

&#x20;     "id": 2,

&#x20;     "name": "Neuron Beta",

&#x20;     "activity": 0.72

&#x20;   }

&#x20; ]

}



Get A Neuron:

GET /api/v1/neurons/:id

&#x09;Example: GET /api/v1/neurons/1	



Get Firing Neurons:

GET /api/v1/neurons/firing



Get Status:

GET /api/v1/neurons/:id/status

&#x09;GET /api/v1/neurons/1/status



Search:

GET /api/v1/neurons/search

Query Parameters: minActivity, sort

&#x09;GET /api/v1/neurons/search?minActivity=0.5\&sort=-activity



POST:

POST /api/v1/neurons

{

&#x20; "name": "Neuron Delta",

&#x20; "activity": 0.88

}



Response:

{

&#x20; "id": 4,

&#x20; "name": "Neuron Delta",

&#x20; "activity": 0.88

}



Status:

201 Created



PUT:

PUT /api/v1/neurons/:id

Request Body:

{

&#x20; "name": "Neuron Delta Updated",

&#x20; "activity": 0.91

}



DELETE:

DELETE /api/v1/neurons/:id

204 No Content



\## HTTP Status Codes



| Status | Meaning |

|--------|---------|

| 200 | OK |

| 201 | Created |

| 204 | No Content |

| 400 | Bad Request |

| 404 | Not Found |

| 500 | Internal Server Error |

\## Error Response



```json

{

&#x20; "success": false,

&#x20; "error": "Neuron not found"

}



