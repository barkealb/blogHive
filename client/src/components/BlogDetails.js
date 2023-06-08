import React from 'react'
import { CommentContext } from '../context/CommentProvider'
import {useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

function BlogDetails() {

    const { id } = useParams()

    const { userAxios } = useContext(CommentContext)

    const [blog, setBlog] = useState([])

    function getBlog(){
        userAxios.get(`/api/blogs/${id}`)
        .then(res => setBlog(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getBlog()
    }, [])

  return (
    <div className='blog-details'>
        <img src={blog.imgUrl} alt={blog.title}/>
        <h1>{blog.title}</h1>
        <p>{blog.blog}</p>
    </div>
  )
}

export default BlogDetails