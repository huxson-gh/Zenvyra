# 🛍️ Zenvyra - E-commerce Platform

![Node](https://img.shields.io/badge/Node.js-v14+-green.svg)
![React](https://img.shields.io/badge/React-v18+-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black.svg)

**Zenvyra** is a full-stack e-commerce application built with the MERN stack (MongoDB, Express, React, Node.js). It features a modern, responsive UI, secure user authentication, product management, shopping cart functionality, and order processing.

---

## 🌐 Live Demo

🔗 **Live Website:** [Zenvyra ↗](https://zenvyra-ecommerce.vercel.app/)  
_(Deployed on Vercel)_

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

---

## ✨ <a name="features"></a>Features

- **User Authentication:** Secure login and registration using JWT and Bcrypt.
- **Product Management:** Browse, search, and filter products. Admin panel for adding/removing products (implied).
- **Shopping Cart:** Add items, update quantities, and remove items.
- **Order Management:** Place orders and view order history.
- **Responsive Design:** Optimized for mobile, tablet, and desktop devices using Tailwind CSS.
- **Image Uploads:** Product images are stored and managed via Cloudinary.
- **Notifications:** Real-time feedback using React Toastify.
- **Order Tracking:** Track order status and delivery updates.
- **Admin Panel:** Manage products, users, and orders.
- **Payment Integration:** Secure and seamless payment processing. (Stripe and Razorpay feature currently unavailable)

---

## 🛠️ <a name="tech-stack"></a>Tech Stack

**Frontend:**

- **React.js:** Component-based UI library.
- **Vite:** Next-generation frontend tooling.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **React Router DOM:** For navigation and routing.
- **Context API:** State management (ShopContext).
- **Axios:** HTTP client for API requests.
- **React Toastify:** For toast notifications.

**Backend:**

- **Node.js:** Runtime environment.
- **Express.js:** Web framework for Node.js.
- **MongoDB:** NoSQL database for data storage.
- **Mongoose:** ODM for MongoDB.
- **JSON Web Token (JWT):** For secure authentication.
- **Bcrypt:** For password hashing.
- **Multer:** Middleware for handling `multipart/form-data` (file uploads).
- **Cloudinary:** Cloud service for image management.
- **Cors:** Cross-Origin Resource Sharing.
- **Dotenv:** Environment variable management.
- **Validator:** Library for string validation.

**Deploment:**

- **Vercel**
- **Render**

---

## 🔧 <a name="prerequisites"></a>Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

---

## ⚙️ <a name="installation--setup"></a>Installation & Setup

Clone the repository:

```bash
git clone https://github.com/your-username/Zenvyra.git
cd Zenvyra
```

### <a name="backend-setup"></a>Backend Setup

1.  Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env` file in the `backend` root and add your configuration (see [Environment Variables](#environment-variables)).

4.  Start the server:
    ```bash
    npm start
    # or for development with nodemon
    npm run server
    ```
    The backend runs on `http://localhost:4000` by default.

### <a name="frontend-setup"></a>Frontend Setup

1.  Open a new terminal and navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env` file in the `frontend` root (see [Environment Variables](#environment-variables)).

4.  Start the development server:
    ```bash
    npm run dev
    ```
    The frontend will run on `http://localhost:5173`.

---

## 🧪 <a name="environment-variables"></a>Environment Variables

Create `.env` files in both `backend` and `frontend` directories with the following variables:

**Backend (`backend/.env`):**

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

**Frontend (`frontend/.env`):**

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_ADMIN_PANEL=http://localhost:5174 # Or wherever your admin panel lives
```

---

## 🔌 <a name="api-endpoints"></a>API Endpoints

Here are the main API routes available:

- **Users:** `/api/user` (Register, Login, Admin Login)
- **Products:** `/api/product` (List, Add, Remove, Single Product)
- **Cart:** `/api/cart` (Add, Get, Update)
- **Orders:** `/api/order` (Place Order, User Orders, Verify connection)

---

## 📁 <a name="folder-structure"></a>Folder Structure

```
Zenvyra/
├── backend/                # Backend logic
│   ├── config/             # DB & Cloudinary config
│   ├── controllers/        # Route logic
│   ├── middleware/         # Auth & Multer
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── uploads/            # Initial upload storage
│   └── server.js           # Entry point
│

├── frontend/               # Frontend logic
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Images & static files
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # Global state (ShopContext)
│   │   ├── pages/          # Page views
│   │   ├── App.jsx         # Main component
│   │   └── main.jsx        # Entry point
│   └── .env                # Env variables
│
├── admin/                  # Admin Panel logic
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Admin assets
│   │   ├── components/     # Admin components
│   │   ├── pages/          # Admin pages (Add/List/Orders)
│   │   ├── App.jsx         # Main component
│   │   └── main.jsx        # Entry point
│   └── .env                # Env variables
│
└── README.md
```

---

## 🤝 <a name="contributing"></a>Contributing

Contributions are welcome!  
If you find this project useful, please consider giving it a ⭐ — it really helps and is greatly appreciated.

Feel free to fork the repository and submit a pull request for any enhancements or bug fixes.
