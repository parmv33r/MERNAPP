import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import PostDetail from './pages/PostDetail'
import EditPost from './pages/EditPost'

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<CreatePost/>} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App