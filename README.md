# MERN Stack Blog App 📝

A full-stack blog application built with MongoDB, Express, React, and Node.js.
Built as a learning project to prepare for an Application Developer interview.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Database | MongoDB Atlas | Store blog posts in the cloud |
| Backend | Node.js + Express | REST API server |
| Frontend | React + Material UI | User interface (coming soon) |
| ODM | Mongoose | Interact with MongoDB using schemas |
| HTTP Client | Axios | Frontend to backend communication (coming soon) |

---

## 📁 Project Structure

```
MERNApp/
├── backend/
│   ├── models/
│   │   └── Post.js          # Mongoose schema/model
│   ├── routes/
│   │   └── postRoutes.js    # CRUD API routes
│   ├── .env                 # Environment variables (not on GitHub)
│   ├── .gitignore           # Ignores node_modules and .env
│   ├── server.js            # Entry point - Express server
│   └── package.json         # Project dependencies
└── frontend/                # Coming soon - React app
```

---

## ✅ Progress

### Phase 1 — Setup (Complete)
- [x] Installed Git, Node.js, VS Code
- [x] Set up MongoDB Atlas free cluster
- [x] Created GitHub repository
- [x] Initialized Git and pushed first commit

### Phase 2 — Backend (Complete)
- [x] Initialized Node.js project with `npm init -y`
- [x] Installed dependencies (express, mongoose, dotenv, cors, nodemon)
- [x] Created Express server in `server.js`
- [x] Connected to MongoDB Atlas
- [x] Created Post model with Mongoose schema
- [x] Built all CRUD routes
- [x] Tested all API endpoints with Thunder Client

### Phase 3 — Frontend (Coming Soon)
- [ ] Set up React app
- [ ] Install and configure Material UI
- [ ] Build blog post components
- [ ] Connect frontend to backend with Axios

---

## 🚀 Getting Started

### Prerequisites
- Node.js v22+
- MongoDB Atlas account
- npm v10+

### Installation

1. Clone the repo:
```bash
git clone https://github.com/YOUR_USERNAME/MERNAPP.git
cd MERNAPP
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Create `.env` file in the backend folder:
```
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

4. Run the backend server:
```bash
npm run dev
```

Server will run on `http://localhost:8000`

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/posts` | Get all blog posts |
| GET | `/api/posts/:id` | Get a single blog post |
| POST | `/api/posts` | Create a new blog post |
| PUT | `/api/posts/:id` | Update a blog post |
| DELETE | `/api/posts/:id` | Delete a blog post |

### Example Request Body (POST/PUT)
```json
{
  "title": "My First Blog Post",
  "content": "This is the content of my blog post",
  "author": "Parmveer"
}
```

---

## 🧠 Key Concepts & Notes

### What is Node.js?
Node.js is a JavaScript runtime that allows us to run JavaScript on the server side,
outside of the browser. It's what makes it possible to use JavaScript for both
frontend and backend development.

### What is Express?
Express is a lightweight web framework for Node.js. It makes it easy to:
- Create routes (API endpoints)
- Handle HTTP requests and responses
- Add middleware (like cors and json parsing)

### What is req and res?
- **req (Request)** — what the CLIENT sends TO the server (body, params, headers)
- **res (Response)** — what the SERVER sends BACK to the client (data, status codes)

Think of it like ordering pizza:
- req = your order
- res = the pizza delivered back

### What is Mongoose?
Mongoose is an ODM (Object Data Modeling) library for MongoDB. It lets us:
- Define schemas (structure/shape of our data)
- Validate data before saving
- Interact with MongoDB using simple JavaScript methods

### What is a Schema?
A schema defines the structure of documents in a MongoDB collection.
Like a blueprint for what a blog post looks like:
```javascript
{
  title: String,       // required
  content: String,     // required
  author: String,      // required
  createdAt: Date,     // auto generated
  updatedAt: Date      // auto generated
}
```

### What is async/await?
async/await is a way to handle asynchronous operations (like database calls)
in a clean, readable way. Instead of chaining .then() calls, we can write
code that looks synchronous but runs asynchronously.

```javascript
// Without async/await (Promise chaining)
Post.find().then(posts => res.json(posts)).catch(err => res.status(500).json(err))

// With async/await (cleaner!)
const posts = await Post.find()
res.json(posts)
```

### What is try/catch?
try/catch is used to handle errors gracefully. If something inside the
try block fails, the catch block runs instead of crashing the app.

```javascript
try {
  const posts = await Post.find()  // try this
  res.status(200).json(posts)
} catch (error) {
  res.status(500).json({ message: error.message })  // if it fails, do this
}
```

### HTTP Status Codes
| Code | Meaning |
|---|---|
| 200 | OK - request succeeded |
| 201 | Created - new resource created |
| 400 | Bad Request - invalid data sent |
| 404 | Not Found - resource doesn't exist |
| 500 | Server Error - something went wrong on the server |

### What is dotenv?
dotenv loads environment variables from a `.env` file into `process.env`.
This keeps sensitive data like database passwords out of your code and off GitHub.

### What is CORS?
CORS (Cross-Origin Resource Sharing) allows our React frontend (running on
one port) to make requests to our Express backend (running on a different port).
Without it, the browser would block these requests for security reasons.

### What is REST API?
REST (Representational State Transfer) is a standard way of building APIs.
It uses HTTP methods to perform CRUD operations:
- GET → Read
- POST → Create
- PUT → Update
- DELETE → Delete

---

## 🔧 npm Commands

```bash
npm init -y          # Initialize a new Node project
npm install          # Install all dependencies
npm run dev          # Start server with nodemon (auto-restarts)
npm run start        # Start server with node (no auto-restart)
```

---

## 📝 Git Commands Used

```bash
git init                    # Initialize a new Git repo
git add .                   # Stage all changes
git commit -m "message"     # Commit with a message
git push origin main        # Push to GitHub
git status                  # Check current status
git log                     # View commit history
```

---

## 💼 Interview Tips

- **"I built a REST API using Node.js and Express"**
- **"I designed a MongoDB schema using Mongoose with validation"**
- **"I implemented full CRUD operations"**
- **"I used async/await for handling asynchronous database operations"**
- **"I tested my API endpoints using Thunder Client"**
- **"I used Git for version control, committing at every milestone"**
- **"I stored sensitive data like connection strings in environment variables"**

---

*Built with ❤️ as part of MERN stack learning journey*
