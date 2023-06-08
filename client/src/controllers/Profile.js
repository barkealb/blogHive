import React, {useContext} from 'react'
import BlogForm from '../forms/BlogForm'
import BlogsList from './BlogsList'
import { BlogContext } from '../context/BlogProvider'
import { UserContext } from '../context/UserProvider'

function Profile(props) {
    const { user: {username} } = useContext(UserContext) 
    const { blogs, removeBlog, getBlog, addBlog, deleteBlog, editBlog } = useContext(BlogContext)

  return (
    <div>
        <BlogForm
        addBlog={addBlog}
        />
        <BlogsList
        blogs={blogs}
        getBlog={getBlog}
        deleteBlog={deleteBlog}
        editBlog={editBlog}
        />

    </div>
  )
}

export default Profile