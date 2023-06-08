import React, {useEffect} from 'react'
import Blog from './Blog'
import CommentForm from '../forms/CommentForm'
import Comment from './Comment'


function BlogsList(props) {
  const { blogs, getBlog, deleteBlog, editBlog } = props

  useEffect(() => {
    getBlog();
  }, [])

  return (
    <div className='blog-Container'>
      {blogs.map(blog => (
        <React.Fragment key={blog._id}>
          <Blog
            {...blog}
            deleteBlog={deleteBlog}
            editBlog={editBlog}
          />
        </React.Fragment>
      ))}
    </div>
  )
}

export default BlogsList