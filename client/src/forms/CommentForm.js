import React, {useContext, useState, useEffect} from 'react'
import {CommentContext} from '../context/CommentProvider'

function CommentForm(props) {
    
    const { blogId } = props

    const { addComment,
        getAllComments,
        getCommentsByBlogId, 
        deleteComment,
        editComment } = useContext(CommentContext)

    const initState = {
        comment: ""
    };

    const [ input, setInput ] = useState(initState);

    

    useEffect(() => {
        getAllComments()
    }, [])

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
        addComment(blogId, input)
        setInput(initState)
    }

  return (
    <form className='comment-box' onSubmit={handleSubmit}>
        <input
        type='text'
        name='comment'
        value={input.comment}
        onChange={handleChange}
        placeholder='Comment'
        />
        <button>Submit</button>
    </form>
  )
}

export default CommentForm