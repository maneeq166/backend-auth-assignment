# Backend Auth Assignment – Scalable REST API

A scalable REST API with JWT authentication, role-based access control, CRUD operations, Swagger documentation, and a minimal React frontend to demonstrate API usage.

---

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcrypt (password hashing)
* Zod (validation)
* Swagger (API documentation)

### Frontend

* React (Vite)
* Axios
* Tailwind CSS
* React Router

---

## Features

### Authentication & Authorization

* User registration & login
* Password hashing using bcrypt
* JWT-based authentication
* Role-based access control (`user`, `admin`)
* Protected routes using middleware

### Task Management

* Create, read, update, delete tasks
* Users can access only their own tasks
* Admins can access all tasks
* Proper HTTP status codes & error handling

### API & Documentation

* Versioned APIs (`/api/v1`)
* Centralized error handling
* Swagger UI for API testing

### Frontend

* User registration & login
* JWT-protected dashboard
* Task CRUD operations
* API error and success handling

---

## Environment Variables

Create a `.env` file in the backend root:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/backend_auth_assignment
JWT_SECRET=supersecretkey
JWT_EXPIRES_IN=1d

---

## Setup Instructions

### Backend

cd backend
npm install
npm run dev

Server runs at:
[http://localhost:5000](http://localhost:5000)

---

### Frontend

cd frontend
npm install
npm run dev

Frontend runs at:
[http://localhost:5173](http://localhost:5173)

---

## API Documentation (Swagger)

Swagger UI:
[http://localhost:5000/api-docs](http://localhost:5000/api-docs)

Steps:

* Click **Authorize**
* Paste JWT token
* Test protected APIs directly

---

## API Endpoints (v1)

### Auth

* POST /auth/register
* POST /auth/login
* GET /auth/me (protected)

### Tasks (protected)

* POST /tasks
* GET /tasks
* GET /tasks/:id
* PUT /tasks/:id
* DELETE /tasks/:id

---

## Security Practices

* Password hashing with bcrypt
* JWT authentication via Authorization header
* Input validation using Zod
* Role-based access enforcement
* Centralized error handling

---

## Scalability Notes

* Stateless JWT authentication for horizontal scaling
* Modular architecture for future microservices
* API versioning for backward compatibility
* Redis can be added for caching
* Docker + load balancer ready for production

---

## Submission Notes

* Backend and frontend fully functional
* Swagger documentation included
* Clean, modular project structure
* Easily extensible for logging, caching, and Docker

---

## Author

Aneeq
Backend Developer Intern Assignment

