
# AEM + React Headless Dashboard

This is a React-based dashboard application built as a portfolio project to demonstrate
real-world authentication, route protection, and role-based personalization.

The project is designed with a headless CMS mindset so that it can later be integrated
with Adobe Experience Manager (AEM) using Content Fragments and GraphQL.

---

## Overview

The application simulates a production-style React setup with authentication,
protected routes, and a dynamic dashboard that changes based on the logged-in user’s role.

A mock backend is currently used for authentication, but the architecture is intentionally
kept flexible so that it can later be replaced with AEM / Adobe IMS or any OAuth-based
authentication provider.

---

## Features

- Login and logout flow
- Global authentication state using React Context
- Protected routes using a PrivateRoute pattern
- Role-based dashboard rendering (Admin, Author, Viewer)
- Configuration-driven UI (CMS-friendly design)
- Centralized API layer using Axios
- Session persistence using localStorage
- Clean and scalable project structure

---

## Tech Stack

Frontend:
- React
- React Router
- Context API
- JavaScript (ES6)

Backend (Mock):
- json-server

API:
- Axios

Styling:
- CSS (class-based styling)

---

## Project Structure

```

src/
├─ auth/
│   ├─ AuthContext.jsx
│   └─ PrivateRoute.jsx
├─ components/
│   └─ Header.jsx
├─ layouts/
│   └─ MainLayout.jsx
├─ pages/
│   ├─ Login.jsx
│   ├─ Dashboard.jsx
│   └─ Profile.jsx
├─ services/
│   ├─ api.js
│   └─ authService.js
├─ utils/
│   └─ dashboardConfig.js
└─ styles.css

````

---

## Authentication Flow

1. User submits login form with email and password
2. Credentials are validated via an API call
3. User data is stored in React Context
4. Session is persisted in localStorage
5. Protected routes become accessible
6. Logout clears both Context and localStorage

The authentication provider is abstracted so it can later be replaced without changing
the core React architecture.

---

## Role-Based Dashboard

Dashboard content is driven by configuration rather than hardcoded conditions.

Each user role receives a different dashboard configuration:
- Admin users see administrative and system-related sections
- Author users see content creation and performance sections
- Viewer users see read-only content

This approach aligns well with headless CMS integrations such as AEM, where UI data
is typically driven by external content models.

---

## Demo Credentials (Mock Backend)

Admin user:
- Email: admin@test.com
- Password: 1234

Author user:
- Email: author@test.com
- Password: 1234

---

## Running the Project Locally

Install dependencies:
```bash
npm install
````

Start the mock backend:

```bash
npx json-server --watch db.json --port 3001
```

Start the React application:

```bash
npm run dev
```

---

## Future Enhancements

* Replace mock authentication with Adobe IMS or OAuth
* Integrate AEM Content Fragments using GraphQL
* Load dashboard configuration from AEM instead of local config
* Improve UI styling and responsiveness
* Add unit and integration tests
* Deploy the application for live demo access

---

## Author

Khushbu Shukla

This project was built as a portfolio and learning exercise to demonstrate
production-style React architecture with AEM headless readiness.
