# 🌾 FarmLokal Backend Assignment

A scalable and production-ready backend system built with **Node.js, TypeScript, Express, MySQL, Redis, and TypeORM**.  
This project implements product APIs, webhook processing, rate limiting, idempotency handling, caching, and monitoring endpoints as required in the assignment.

---

## 🚀 Live Demo

**Deployed API Base URL:**

https://farmlokal-backend-erh1.onrender.com

---

## All URL to test : 
GET https://farmlokal-backend-erh1.onrender.com/products

GET https://farmlokal-backend-erh1.onrender.com/products?page=2&limit=10

GET https://farmlokal-backend-erh1.onrender.com/products?sort=price&order=desc

GET https://farmlokal-backend-erh1.onrender.com/products?sort=name&order=asc

GET https://farmlokal-backend-erh1.onrender.com/products?search=Product

GET https://farmlokal-backend-erh1.onrender.com/products?category=fruits

GET https://farmlokal-backend-erh1.onrender.com/products?category=vegetables

GET https://farmlokal-backend-erh1.onrender.com/products?category=vegetables&sort=price&order=asc&limit=5

GET https://farmlokal-backend-erh1.onrender.com/metrics

GET https://farmlokal-backend-erh1.onrender.com/products

GET https://farmlokal-backend-erh1.onrender.com/

POST POST https://farmlokal-backend-erh1.onrender.com/webhook

Body:
{
  "event": "order.updated",
  "id": 123
}

Headers (Required)
x-event-id: test123
Content-Type: application/json

## 🛠 Tech Stack

- **Node.js** + **TypeScript**
- **Express.js**
- **MySQL (Aiven Cloud)**
- **Redis (Render Key-Value Store)**
- **TypeORM**
- **Pino Logger**
- **Rate Limiter Flexible**
- **Docker (optional)**
- **Render for Deployment**

---

## ✨ Features Implemented

### Core Functionalities

- OAuth Token Handling (Mock Implementation)
- Product Listing API with:
  - Pagination  
  - Sorting  
  - Searching  
  - Filtering  
- Redis Caching Layer  
- Webhook Endpoint with Idempotency  
- Rate Limiting  
- Centralized Error Handling  
- Metrics Endpoint  
- Structured Logging  
- Production Ready Deployment  

---

## 📌 API Endpoints

### 🔹 Products API

| Feature | Example |
|-------|-------|
| Basic Fetch | `/products` |
| Pagination | `/products?page=2&limit=10` |
| Sorting | `/products?sort=price&order=desc` |
| Search | `/products?search=Product` |
| Filter | `/products?category=fruits` |
| Combined | `/products?category=vegetables&sort=price&order=asc&limit=5` |

Example Request:

GET /products?page=1&limit=20


Example Response:

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 0,
    "totalPages": 0
  }
}
```
## 🔹 Webhook API

**Endpoint**

POST /webhook

**Headers Required**

x-event-id: unique-event-id  
Content-Type: application/json

**Sample Body**

{
  "event": "order.updated",
  "id": 123
}

**Responses**

First request:

{ "message": "Processed" }

Duplicate request:

{ "message": "Duplicate ignored" }

This ensures **idempotency using Redis**.

---

## 🔹 Metrics API

**Endpoint**

GET /metrics

**Example Response**

{
  "uptime": 123.45,
  "memory": {
    "rss": 12345678,
    "heapTotal": 9876543,
    "heapUsed": 8765432
  },
  "timestamp": "2026-02-06T10:53:16.000Z"
}

---

## ⚙ Environment Variables

Create a `.env` file for local development:

PORT=5000

MYSQL_HOST=localhost  
MYSQL_PORT=3306  
MYSQL_USER=root  
MYSQL_PASSWORD=your_password  
MYSQL_DB=farmlokal  

REDIS_HOST=localhost  
REDIS_PORT=6379  

OAUTH_URL=https://mock-oauth.com/token  
OAUTH_CLIENT_ID=client123  
OAUTH_CLIENT_SECRET=secret123  

---

### Production (Render) Environment Variables

PORT=5000

MYSQL_HOST=your-aiven-host  
MYSQL_PORT=your-aiven-port  
MYSQL_USER=your-aiven-user  
MYSQL_PASSWORD=your-aiven-password  
MYSQL_DB=defaultdb  

REDIS_URL=redis://your-render-redis-url  

OAUTH_URL=https://mock-oauth.com/token  
OAUTH_CLIENT_ID=client123  
OAUTH_CLIENT_SECRET=secret123  

---

## 🧩 Project Structure

```
backend/
│
├── src/
│   ├── config/
│   │   ├── db.ts
│   │   ├── redis.ts
│   │   ├── logger.ts
│   │   └── env.ts
│   │
│   ├── controllers/
│   │   ├── product.controller.ts
│   │   ├── webhook.controller.ts
│   │   └── metrics.controller.ts
│   │
│   ├── middlewares/
│   │   ├── rateLimiter.ts
│   │   └── errorHandler.ts
│   │
│   ├── models/
│   │   └── product.model.ts
│   │
│   ├── routes/
│   │   ├── product.routes.ts
│   │   ├── webhook.routes.ts
│   │   └── metrics.routes.ts
│   │
│   ├── seed/
│   │   └── seedProducts.ts
│   │
│   ├── utils/
│   │   └── idempotency.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── package.json
├── tsconfig.json
├── docker-compose.yml
└── .dockerignore
```

---

## 🛠 Installation & Setup

### 1️⃣ Clone Repository

git clone https://github.com/codeAkhilesh14/FarmLokal-Assignment.git  
cd FarmLokal-Assignment/backend  

---

### 2️⃣ Install Dependencies

npm install

---

### 3️⃣ Start Development Server

npm run dev

Server will run at:

http://localhost:5000

---

### 4️⃣ Seed Database

To populate initial product data:

npm run seed

Ensure `.env` points to the correct MySQL database before running seed.

---

### 5️⃣ Build for Production

npm run build

---

### 6️⃣ Run Production Server

npm start

---

## 🐳 Docker Support (Optional)

Run using Docker:

docker-compose up

---

## 🚀 Deployment

### Platform

- Backend: **Render**
- Database: **Aiven MySQL**
- Cache: **Render Redis Key-Value Store**

### Render Configuration

**Build Command**

npm install && npm run build

**Start Command**

node dist/server.js

---

## 🧪 How to Test After Deployment

### Products API

GET https://farmlokal-backend-erh1.onrender.com/products

### Pagination

GET /products?page=2&limit=10

### Sorting

GET /products?sort=price&order=desc

### Search

GET /products?search=Product

### Filter

GET /products?category=fruits

### Combined Query

GET /products?category=vegetables&sort=price&order=asc&limit=5

### Webhook Test

POST https://farmlokal-backend-erh1.onrender.com/webhook
Body : 
{
  "event": "order.updated",
  "id": 123
}
Header : 
Content-Type : application/json
x-event-d : 123456

### Metrics

GET https://farmlokal-backend-erh1.onrender.com/metrics

---

## 🔐 Reliability & Performance Features

- Redis-based caching  
- Rate limiting  
- Webhook idempotency  
- Efficient DB queries  
- Structured logging  
- Optimized API responses  

---

## 📜 Trade-offs

- Used TypeORM synchronize for simplicity (not recommended for large production systems)  
- Mock OAuth implementation used  
- Basic Redis caching strategy for demo purposes  

---

## 👨‍💻 Author

**Akhilesh Verma**

---

## 📄 License

MIT License
👨‍💻 Author
Akhilesh Verma

📄 License
MIT License
