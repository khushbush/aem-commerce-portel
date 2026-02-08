# AEM Headless Commerce Portal (React + AEM)

A modern headless commerce-style web application built using **React** and **Adobe Experience Manager (AEM Headless)**.

This project focuses on learning and implementing **real-world frontend architecture**, not just UI screens.
It demonstrates how rendering strategies, CMS integration, and routing decisions affect performance, SEO, and scalability.

---

## Project Goals

* Integrate AEM Content Fragments using GraphQL
* Build a clean separation between CMS and UI
* Apply correct rendering strategies (CSR / SSR / SSG mindset)
* Follow production-like architecture (proxy, persisted queries, no CORS hacks)
* Prepare foundation for future migration to Next.js

---

## Tech Stack

Frontend:

* React
* React Router
* Context API
* Axios

CMS:

* Adobe Experience Manager (Headless)
* Content Fragments
* GraphQL Persisted Queries

Dev Infra:

* Vite
* Proxy for local AEM integration

---

## Features

* Authentication (login/logout)
* Personalized dashboard
* Product Listing Page (PLP)
* Product Detail Page (PDP)
* Category filtering
* AEM-driven product data
* Clean service layer for API calls

---

## Architecture Overview

This project follows a **headless architecture**:

AEM → content only
React → experience only

Responsibilities are clearly separated:

* AEM manages structured content (products, metadata)
* React handles UI, routing, and interactivity

This keeps the system scalable and easier to evolve.

---

## Rendering Strategy (Key Learning)

Instead of using one rendering approach everywhere, each page uses what fits best:

| Page                   | Strategy    | Reason                  |
| ---------------------- | ----------- | ----------------------- |
| Landing / Static pages | SSG mindset | fastest + SEO           |
| PLP                    | SSG-style   | mostly static catalog   |
| PDP                    | SSR-style   | dynamic product data    |
| Dashboard              | CSR         | heavy interaction       |
| Cart                   | CSR         | real-time state updates |

### Mental model used

* Static → SSG
* Dynamic per request → SSR
* Interactive → CSR

This avoids overengineering and improves performance.

---

## AEM Integration Approach

* Content stored as Content Fragments
* Data fetched using GraphQL
* Persisted queries for security & performance
* Server-side filtering (not client-side filtering)
* Local proxy used to avoid CORS issues
* Production would use Dispatcher/CDN proxy

This mirrors real enterprise setups.

---

## Folder Structure (Simplified)

```
src/
 ├─ pages/
 ├─ components/
 ├─ auth/
 ├─ aem/services/
 ├─ layouts/
 └─ utils/
```

* pages → routes/screens
* components → reusable UI
* services → AEM/GraphQL calls
* auth → session management

---

## Key Learnings

* Rendering strategy matters more than framework choice
* CMS should not control UI logic
* Persisted queries improve performance & security
* Proxying is better than enabling CORS
* Hybrid rendering is ideal for commerce apps

---

## Future Enhancements

* Migrate to Next.js for SSR/SSG
* Add PDP server-side rendering
* Add cart/checkout
* Add caching layer
* Integrate AEM Edge Delivery for static pages

---

## How to Run

```bash
npm install
npm run dev
```

Make sure AEM Author is running locally.

---

## Author

Built as a learning + portfolio project to explore modern headless and rendering architectures.
