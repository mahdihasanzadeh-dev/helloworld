import React, { useEffect } from 'react'
import{
    Link,
    Outlet
} from 'react-router-dom'

const PostList = () => {
    const [posts, setPosts] = React.useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    },[])
  return (
    <div>
        <h2>All Post</h2>
        <ul>
            {
                posts.map(post => 
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link> 
                </li>)
            }
        </ul>
        <Outlet />
    </div>
  )
}

export default PostList