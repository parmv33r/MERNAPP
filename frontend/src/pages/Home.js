import { useEffect, useState } from 'react'
import { Container, Grid, Card, CardContent, CardActions, 
         Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const [posts, setPosts] = useState([])

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

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4">Latest Posts</Typography>
      </Box>
      <Grid container spacing={3}>
        {posts.map((post) => (
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
    </Container>
  )
}

export default Home