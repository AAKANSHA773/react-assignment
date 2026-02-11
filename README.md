# React User Management CRUD App

A simple React-based CRUD (Create, Read, Update, Delete) web application to manage user data using an API. The application is designed with extensibility in mind so new fields can be added with minimal code changes.

## Live Demo

Frontend deployed on Vercel:
(https://react-assignment-nu-sandy.vercel.app/)

Backend API deployed on Render:
(https://react-assignment-json.onrender.com/)

---

## Features

### User Form

* Fields:

  * First Name
  * Last Name
  * Phone Number
  * Email Address
* Required field validation
* Email & phone format validation
* Loading and error states

### CRUD Operations

* Create a new user
* Read and display all users
* Update existing user information
* Delete a user

### Extensible Form Architecture

The form is configuration-driven.
New fields can be added by updating a single configuration file without rewriting UI or logic.

Example:

```
src/config/formConfig.js
```

Add a new field:

```
{
  name: "address",
  label: "Address",
  type: "text",
  required: false
}
```

The form updates automatically.

### UI/UX

* Clean dashboard layout
* Popup form for add/edit
* Responsive table
* Tailwind CSS styling

---

## Tech Stack

* React
* Tailwind CSS
* Axios
* JSON Server
* Vercel (Frontend deployment)
* Render (Backend API deployment)

---

## Project Structure

```
src/
 ┣ components/
 ┃ ┣ UserForm.jsx
 ┃ ┗ UserList.jsx
 ┣ services/
 ┃ ┗ userApi.js
 ┣ utils/
 ┃ ┗ validation.js
 ┣ config/
 ┃ ┗ formConfig.js
 ┣ controllers/
 ┃ ┗ formController.js
 ┗ App.js
```

---

## Setup Instructions

### Clone repository

```
git clone <your-repo-url>
cd project-folder
```

### Install dependencies

```
npm install
```

### Run frontend locally

```
npm start
```

### Run JSON server locally

```
npx json-server --watch db.json --port 3001
```

---

## API Integration

The application uses REST APIs for CRUD operations.

Endpoints:

* GET /users
* POST /users
* PUT /users/:id
* DELETE /users/:id

---

## Assumptions & Design Decisions

* JSON-server used as mock backend
* Config-driven form implemented for extensibility
* Axios used for API communication
* Modular architecture (services, utils, controllers)

---

## Deployment

Frontend deployed on Vercel.
Backend JSON API deployed on Render.

---



