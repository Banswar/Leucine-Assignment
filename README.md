# Equipment Tracker

A simple full-stack CRUD web application to manage equipment records. This project demonstrates frontend, backend, and database fundamentals using **React (Vite)**, **Node.js (Express)**, and **MySQL**.

---

## Features

- View equipment list in a table
- Add new equipment
- Edit existing equipment
- Delete equipment
- Client-side sorting by table columns
- Basic form validation
- Clean, responsive UI

---

## Tech Stack

### Frontend
- React (Vite)
- Axios
- Custom CSS (no UI frameworks)

### Backend
- Node.js
- Express

### Database
- MySQL

---

## Project Structure

```
equipment-tracker/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   └── equipment.routes.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── components/
│   │   │   ├── EquipmentForm.jsx
│   │   │   └── EquipmentTable.jsx
│   │   ├── styles.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## How to Run the Project

### Prerequisites
- Node.js installed
- MySQL installed and running

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your MySQL database connection in `config/db.js`

4. Start the backend server:
   ```bash
   npm start
   ```

Backend runs on: **http://localhost:3000**

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

Frontend runs on: **http://localhost:5173**

---

## API Endpoints

| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| GET    | /api/equipment        | Get all equipment   |
| POST   | /api/equipment        | Add new equipment   |
| PUT    | /api/equipment/:id    | Update equipment    |
| DELETE | /api/equipment/:id    | Delete equipment    |

---

## Assumptions

- Single-user application
- No authentication required
- Small dataset (client-side sorting used)
- Backend acts as the source of truth

---

## Design Decisions

- **Client-side sorting** for simplicity
- **Single form** reused for add and edit operations
- **Axios instance** for centralized API configuration
- **Minimal UI** focused on usability and clarity

---

## Error Handling

- Frontend validation for required fields
- Backend validation for missing data
- Database errors logged on the server

---

## Future Improvements

- Search and filter functionality
- Pagination for large datasets
- Improved error feedback (toasts/notifications)
- Backend-level sorting and filtering
- Unit and integration tests
- User authentication
- Deployment configuration

---

## Author

**Saurabh Banswar**

---
