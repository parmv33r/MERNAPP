import { useEffect, useState } from 'react'
import { Container, Grid, Card, CardContent, CardActions,
         Typography, Button, Box, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const [posts, setPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/posts')
      setPosts(response.data)
    } catch (error) {
      console.log('Error fetching posts:', error)
    }
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">Latest Posts</Typography>
        <TextField
          placeholder="Search by title or author..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size="small"
          sx={{ width: '300px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>
      {filteredPosts.length === 0 ? (
        <Typography variant="h6" color="text.secondary" sx={{ mt: 4, textAlign: 'center' }}>
          No posts found matching your search
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post._id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    By {post.author}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {post.content.substring(0, 100)}...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    component={Link}
                    to={`/posts/${post._id}`}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

export default Home