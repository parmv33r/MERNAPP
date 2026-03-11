import { useState, useEffect } from 'react'
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function EditPost() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  })

  useEffect(() => {
    fetchPost()
  }, [])

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/posts/${id}`)
      setFormData({
        title: response.data.title,
        content: response.data.content,
        author: response.data.author
      })
    } catch (error) {
      console.log('Error fetching post:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:8000/api/posts/${id}`, formData)
      navigate(`/posts/${id}`)
    } catch (error) {
      console.log('Error updating post:', error)
    }
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Edit Post
        </Typography>
        <Box>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          <TextField
            fullWidth
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            sx={{ mb: 3 }}
          />
          <TextField
            fullWidth
            label="Content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            multiline
            rows={6}
            sx={{ mb: 3 }}
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              onClick={handleSubmit}
            >
              Update Post
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate(`/posts/${id}`)}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  )
}

export default EditPost