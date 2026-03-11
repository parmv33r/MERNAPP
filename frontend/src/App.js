import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<CreatePost/>} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App