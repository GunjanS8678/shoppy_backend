# ShoppyGlobe Backend

A robust e-commerce backend API built with Node.js, Express, and MongoDB.

## 🚀 Features

- Product management
- Shopping cart functionality
- User authentication using JWT
- MongoDB integration
- Error handling and input validation
- Protected routes for cart operations

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- Bcrypt.js for password hashing
- Mongoose ODM

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB installed locally or MongoDB Atlas account
- npm or yarn package manager

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shoppyglobe-backend.git
cd shoppyglobe-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4. Start the server:
```bash
npm start
```

## 🔑 API Endpoints

### Authentication Routes
```
POST /auth/register - Register a new user
POST /auth/login - Login user and get token
```

### Product Routes
```
GET /products - Get all products
GET /products/:id - Get single product by ID
```

### Cart Routes (Protected - Requires Authentication)
```
POST /cart - Add product to cart
PUT /cart/:productId - Update product quantity in cart
DELETE /cart/:productId - Remove product from cart
```

## 📝 API Documentation

### Authentication

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
    "email": "user@example.com",
    "password": "password123"
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
    "email": "user@example.com",
    "password": "password123"
}
```

### Products

#### Get All Products
```http
GET /products
```

#### Get Single Product
```http
GET /products/:id
```

### Cart

#### Add to Cart
```http
POST /cart
Authorization: Bearer <token>
Content-Type: application/json

{
    "productId": "product_id_here",
    "quantity": 1
}
```

#### Update Cart Item
```http
PUT /cart/:productId
Authorization: Bearer <token>
Content-Type: application/json

{
    "quantity": 2
}
```

#### Remove from Cart
```http
DELETE /cart/:productId
Authorization: Bearer <token>
```

## 📊 Database Schema

### User Schema
```javascript
{
    email: String,
    password: String
}
```

### Product Schema
```javascript
{
    name: String,
    price: Number,
    description: String,
    stockQuantity: Number
}
```

### Cart Schema
```javascript
{
    userId: ObjectId,
    items: [{
        productId: ObjectId,
        quantity: Number
    }]
}
```

## 🔐 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## 🧪 Testing

To test the API endpoints, you can use tools like:
- Postman
- Thunder Client
- cURL

Example test flow:
1. Register a new user
2. Login and get token
3. Use token to access protected routes
4. Test CRUD operations on cart

## ⚠️ Error Handling

The API implements comprehensive error handling for:
- Invalid requests
- Authentication errors
- Database errors
- Validation errors

## 🔄 Environment Variables

Required environment variables:
```
MONGODB_URI - MongoDB connection string
JWT_SECRET - Secret key for JWT
PORT - Server port (default: 5000)
```

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
