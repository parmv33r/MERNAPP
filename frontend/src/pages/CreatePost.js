import { useState } from 'react'
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function CreatePost() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/api/posts', formData)
      navigate('/')
    } catch (error) {
      console.log('Error creating post:', error)
    }
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Create New Post
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
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
          >
            Publish Post
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default CreatePost