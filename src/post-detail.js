import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Helmet} from "react-helmet";

const PostDetail = () => {
    let params = useParams();
    let [post, setPost] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
            .then(response => response.json())
            .then(json => setPost(json))
    },[])
  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{post.title}</title>
            <meta name="description" content={post.body?.slice(0,100)} />
        </Helmet>
    </div>
  )
}

export default PostDetail