import { useEffect, useState } from 'react'
import { Container, Typography, Box, Button, Paper, Divider } from '@mui/material'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetchPost()
  }, [])

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/posts/${id}`)
      setPost(response.data)
    } catch (error) {
      console.log('Error fetching post:', error)
    }
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/posts/${id}`)
      navigate('/')
    } catch (error) {
      console.log('Error deleting post:', error)
    }
  }

  if (!post) return <Typography sx={{ mt: 4, ml: 4 }}>Loading...</Typography>

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {post.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
          By {post.author} • {new Date(post.createdAt).toLocaleDateString()}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="body1" sx={{ mb: 4 }}>
          {post.content}
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            component={Link}
            to={`/edit/${post._id}`}
          >
            Edit Post
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={handleDelete}
          >
            Delete Post
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default PostDetail