Notes API

About

This project is a REST API built using Node.js, Express.js, MongoDB, and Mongoose. It started as a file handling project using the "fs" module and JSON files, and was later upgraded to use MongoDB for persistent storage.

The project demonstrates:

- REST API development with Express
- MongoDB integration using Mongoose
- Custom Express middleware
- Request validation
- API key authentication
- Request logging and response time measurement

---

Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

Project Structure

notesAPI/
│
├── Controller/
├── MiddleWares/
├── config/
├── models/
├── routes/
├── service/
├── src/
│
├── server.js
├── package.json
├── readme.md
└── data.json

---

API Endpoints

Create Note

POST

/api/notes

Request Headers

Content-Type: application/json
api_key: s123

Request Body

{
  "title": "Backend dev",
  "content": "Created an API in Notes API"
}

---

Successful Response

Status Code: "200 OK"

{
  "message": "Successful",
  "data": {
    "_id": "<generated_id>",
    "title": "Backend dev",
    "content": "Created an API in Notes API",
    "createdAt": "<timestamp>",
    "updatedAt": "<timestamp>"
  }
}

---

Validation Middleware Response

If required fields are missing, empty, or invalid:

Status Code: "400 Bad Request"

{
  "errors": [
    "Title is required",
    "Content is required"
  ]
}

Example:

{
  "errors": [
    "Title datatype or string is empty"
  ]
}

---

Authentication Middleware Response

If the API key is missing or incorrect:

Status Code: "400 Bad Request"

{
  "message": "Unauthorized"
}

---

Logger Middleware

Every request is logged in the terminal.

Example:

POST /api/notes
POST /api/notes - 200 - 114 ms

If authorization fails:

POST /api/notes
POST /api/notes - 400 - 20 ms

The logger records:

- HTTP Method
- Request URL
- Response Status Code
- Total Request Processing Time

---

Features

- Create Notes
- MongoDB Database Integration
- Express Routing
- Request Validation Middleware
- API Key Authentication Middleware
- Request Logger Middleware
- Response Time Measurement
- JSON Request Parsing

---

Future Improvements

- Get All Notes
- Get Note by ID
- Update Note
- Delete Note
- Filtering
- Searching
- Pagination
- JWT Authentication
- Authorization
- Global Error Handling
