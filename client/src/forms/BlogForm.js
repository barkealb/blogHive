import React, { useState, useContext }from 'react'
import { BlogContext } from '../context/BlogProvider'

function BlogForm(props) {

    const { addBlog } = props

    const initState = {
        imgUrl: "",
        title: "",
        blog: "" 
    }    

    const [ input, setInput ] = useState(initState)

    function handleChange(e){
        const {name, value} = e.target
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        addBlog(input)
        setInput(initState)
    }

  return (
    <form onSubmit={handleSubmit} className='blog-container'>
        <input
        type="text"
        name="imgUrl"
        value={input.imgUrl}
        onChange={handleChange}
        placeholder="Blog Image"
        />
        <input
        type="text"
        name="title"
        value={input.title}
        onChange={handleChange}
        placeholder="Title of Your Blog"
        />
        <textarea
        type="textarea"
        name="blog"
        value={input.blog}
        onChange={handleChange}
        placeholder="Write Your Blog"
        />
        <button>Submit</button>
    </form>
  )
}

export default BlogForm