import React, {useContext, useEffect} from 'react'
import {BlogContext} from '../context/BlogProvider'
import BlogsList from './BlogsList'

function Public(props) {
  
    
    const { getAllBlog, blogs, getBlog, addBlog, deleteBlog, editBlog } = useContext(BlogContext)

    useEffect(() => {
        getAllBlog()
    }, [])  


  return (
    <div>
        <BlogsList
         blogs={blogs}
         getBlog={getBlog}
         deleteBlog={deleteBlog}
         editBlog={editBlog}
        />
    </div>
  )
}

export default Public   