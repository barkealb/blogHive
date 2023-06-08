import React from 'react'
import { createContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from './UserProvider';

const BlogContext = createContext()

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function BlogProvider(props) {

    const initState = {
        blogs: []
    }

    const [ blogState, setBlogState ] = useState(initState)

    function removeBlog(){
        setBlogState({
            blogs: []
        })
    }

    function getAllBlog(){
        userAxios.get('/api/blogs')
        .then(res => setBlogState(prevState => {
            return {
                ...prevState,
                blogs: res.data
            }
        }))
        .catch(err => console.log(err))
    }

    function getBlog(){
        userAxios.get('/api/blogs/user')
        .then(res => setBlogState(prevState => {
            return {
                ...prevState,
                blogs: res.data
            }
        }))
        .catch(err => console.log(err))
    }

    function addBlog(newBlog){
        userAxios.post('/api/blogs', newBlog)
        .then(res => setBlogState(prevState => {
            return {
                ...prevState,
                blogs:[...prevState.blogs, res.data]
            }
        }))
        .catch(err => console.log(err))
    }

    function deleteBlog(blogId){
        userAxios.delete(`/api/blogs/${blogId}`)
        .then(res => setBlogState(prevState => {
            return {
                ...prevState, 
                blogs: prevState.blogs.filter(blogs => blogs._id !== blogId)
            }
        }))
        .catch(err => console.log(err))
    }

    function editBlog(blogId, updatedBlog){
        userAxios.put(`/api/blogs/${blogId}`, updatedBlog)
        .then(res => setBlogState(prevState => {
            return {
                ...prevState, 
                blogs: prevState.blogs.map(blog => blog._id === blogId ? res.data : blog)
            }
        }))
        .catch(err => console.log(err))
    }

  return (
   <BlogContext.Provider
   value={{ ...blogState, removeBlog, getBlog, addBlog, deleteBlog, editBlog, getAllBlog }}
   >
    {props.children}
   </BlogContext.Provider>
  )
}

export { BlogContext, BlogProvider } 