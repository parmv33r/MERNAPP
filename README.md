# MERN Stack Blog App 📝

A full-stack blog application built with MongoDB, Express, React, and Node.js.
Built as a learning project to prepare for an Application Developer interview.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Database | MongoDB Atlas | Store blog posts in the cloud |
| Backend | Node.js + Express | REST API server |
| Frontend | React | User interface |
| Styling | Material UI (MUI) | Pre-built beautiful components |
| ODM | Mongoose | Interact with MongoDB using schemas |
| HTTP Client | Axios | Frontend to backend communication |
| Routing | React Router DOM | Navigate between pages |

---

## 📁 Project Structure

```
MERNApp/
├── backend/
│   ├── models/
│   │   └── Post.js             # Mongoose schema/model
│   ├── routes/
│   │   └── postRoutes.js       # CRUD API routes
│   ├── .env                    # Environment variables (not on GitHub)
│   ├── .gitignore              # Ignores node_modules and .env
│   ├── server.js               # Entry point - Express server
│   └── package.json            # Project dependencies
└── frontend/
    └── src/
        ├── components/
        │   └── Navbar.js       # Navigation bar shown on every page
        ├── pages/
        │   ├── Home.js         # Displays all blog posts as cards
        │   ├── CreatePost.js   # Form to create a new blog post
        │   ├── PostDetail.js   # Full post view with edit/delete
        │   └── EditPost.js     # Pre-filled form to update a post
        ├── App.js              # Root component - handles routing
        └── index.js            # Entry point - renders App into DOM
```

---

## ✅ Progress

### Phase 1 — Setup (Complete ✅)
- [x] Installed Git, Node.js, VS Code
- [x] Set up MongoDB Atlas free cluster
- [x] Created GitHub repository
- [x] Initialized Git and pushed first commit

### Phase 2 — Backend (Complete ✅)
- [x] Initialized Node.js project with `npm init -y`
- [x] Installed dependencies (express, mongoose, dotenv, cors, nodemon)
- [x] Created Express server in `server.js`
- [x] Connected to MongoDB Atlas
- [x] Created Post model with Mongoose schema
- [x] Built all CRUD routes
- [x] Tested all API endpoints with Thunder Client

### Phase 3 — Frontend (Complete ✅)
- [x] Created React app with create-react-app
- [x] Installed Material UI, Axios, React Router
- [x] Built Navbar component
- [x] Built Home page — displays all posts as MUI Cards
- [x] Built Create Post page — form to create new posts
- [x] Built Post Detail page — full post with delete functionality
- [x] Built Edit Post page — pre-filled form to update posts
- [x] Connected frontend to backend with Axios
- [x] Full CRUD working end to end

### Phase 4 — Enhancements (Coming Soon 🔜)
- [ ] Add authentication (login/signup with JWT)
- [ ] Add search functionality
- [ ] Add pagination
- [ ] Deploy app online (Render + Netlify)
- [ ] JavaScript interview prep

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

5. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

6. Run the frontend:
```bash
npm start
```

- Backend runs on `http://localhost:8000`
- Frontend runs on `http://localhost:3000`

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

### What is useState?
useState is a React hook that lets us store and manage data inside a component.
```javascript
const [posts, setPosts] = useState([])
// posts = the data
// setPosts = function to update the data
// [] = initial value (empty array)
```
Think of it like a whiteboard:
- posts = what's written on it
- setPosts = the marker used to update it
- React automatically refreshes the screen when it changes

### What is useEffect?
useEffect is a React hook that runs code at specific times.
```javascript
useEffect(() => {
  fetchPosts()  // run this when component loads
}, [])          // [] means run only once
```
Think of it like an instruction:
"As soon as this page opens — go fetch the blog posts"

### What is useParams?
useParams is a React Router hook that grabs variables from the URL.
```javascript
const { id } = useParams()
// URL: /posts/64f1a2b3
// id = "64f1a2b3"
```

### What is useNavigate?
useNavigate is a React Router hook that lets us redirect the user to another page.
```javascript
const navigate = useNavigate()
navigate('/')            // go to home page
navigate(`/posts/${id}`) // go to specific post
```

### What is the Spread Operator?
The spread operator ... copies existing values and lets us update specific ones.
```javascript
setFormData({
  ...formData,                       // keep all existing form values
  [e.target.name]: e.target.value    // update only the changed field
})
```

### What is CORS?
CORS (Cross-Origin Resource Sharing) allows our React frontend (running on
port 3000) to make requests to our Express backend (running on port 8000).
Without it, the browser would block these requests for security reasons.

### What is REST API?
REST (Representational State Transfer) is a standard way of building APIs.
It uses HTTP methods to perform CRUD operations:
- GET → Read
- POST → Create
- PUT → Update
- DELETE → Delete

### What is dotenv?
dotenv loads environment variables from a .env file into process.env.
This keeps sensitive data like database passwords out of your code and off GitHub.

### HTTP Status Codes
| Code | Meaning |
|---|---|
| 200 | OK - request succeeded |
| 201 | Created - new resource created |
| 400 | Bad Request - invalid data sent |
| 404 | Not Found - resource doesn't exist |
| 500 | Server Error - something went wrong on the server |

### How the Full Stack Connects
```
MongoDB (database)
    ↓
Express API (backend on port 8000)
    ↓
Axios (makes HTTP requests)
    ↓
React (frontend on port 3000)
    ↓
Material UI (displays beautifully)
```

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

## 🗺️ Page Routes

| Route | Component | Description |
|---|---|---|
| `/` | Home.js | Displays all posts as cards |
| `/create` | CreatePost.js | Form to create a new post |
| `/posts/:id` | PostDetail.js | Full post with edit/delete |
| `/edit/:id` | EditPost.js | Pre-filled form to update post |

---

## 💼 Interview Tips

- "I built a full stack MERN application from scratch"
- "I designed and built a REST API with Express and Node.js"
- "I used React hooks like useState and useEffect to manage state and side effects"
- "I implemented React Router for client side navigation"
- "I used Material UI to build a responsive professional UI"
- "I followed Git best practices with meaningful commits at every milestone"
- "I stored sensitive data securely using environment variables"
- "I used async/await for handling asynchronous database operations"
- "I separated components from pages to keep the code organized and reusable"

---

## 🔜 Next Steps
- Add authentication with JWT
- Add search and pagination
- Deploy to Render (backend) and Netlify (frontend)
- JavaScript interview prep (closures, promises, array methods)

---

*Built with ❤️ as part of MERN stack learning journey*
