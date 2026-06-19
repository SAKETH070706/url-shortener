# URL Shortener

A full-stack URL Shortener application built using the MERN stack. The application allows users to convert long URLs into short, shareable links and redirect users to the original destination using unique short codes.

## Features

* Convert long URLs into shortened links
* Unique short code generation
* Fast URL redirection
* MongoDB-based storage
* Click tracking and analytics
* RESTful API architecture
* Responsive React frontend
* URL validation and error handling

## Tech Stack

### Frontend

* React.js
* JavaScript
* CSS3
* Vite

### Backend

* Node.js
* Express.js

### Database

* MongoDB

## Project Structure

```text
URL/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── urlController.js
│   │
│   ├── models/
│   │   └── Url.js
│   │
│   ├── routes/
│   │   └── urlRoutes.js
│   │
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Converter.jsx
│   │   │   └── Stats.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   │
│   ├── index.html
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/SAKETH070706/url-shortener.git
cd url-shortener
```

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

```

Start the backend server:

```bash
npm start
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

## API Endpoints

### Create Short URL

```http
POST /api/url/shorten
```

Request:

```json
{
  "longUrl": "https://example.com"
}
```

### Redirect to Original URL

```http
GET /:shortCode
```

### Get URL Statistics

```http
GET /api/url/stats/:shortCode
```

## Future Improvements

* User authentication
* Custom aliases
* QR code generation
* Advanced analytics dashboard
* URL expiration dates
* Redis caching for high-performance redirects


## Author

**L. GopalaKrishna Saketh**

GitHub: https://github.com/SAKETH070706
