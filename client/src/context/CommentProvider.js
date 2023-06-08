import React from 'react'
import { createContext, useState } from 'react'
import axios from 'axios'

const CommentContext = createContext()

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`
    return config
})


function CommentProvider(props) {

    const initState = {
        comments: []
    };

    const [ commentState, setCommentState ] = useState(initState);

    // get all comments

    function getAllComments(){
        userAxios.get('/api/comments')
        .then(res => setCommentState(prevState => {
            return {
                ...prevState,
                comments: res.data
            }
        }))
        .catch(err => console.log(err))
    }

    // get comments by blog id

    function getCommentsByBlogId(blogId){
        userAxios.get(`/api/comments/${blogId}`)
        .then(res => setCommentState(prevState => {
            return {
                ...prevState,
                comments: res.data
            }
        }))
        .catch(err => console.log(err))
    }

    
    // add comment

    function addComment(blogId, newComment){
        userAxios.post(`/api/comments/${blogId}`, newComment)
        .then(res => setCommentState(prevState => {
            return {
                ...prevState,
                comments:[...prevState.comments, res.data]
            }
        }))
        .catch(err => console.log(err))
    }

    // delete comment

    function deleteComment(commentId){
        userAxios.delete(`/api/comments/${commentId}`)
        .then(res => setCommentState(prevState => {
            return {
                ...prevState,
                comments: prevState.comments.filter(comment => comment._id !== commentId)
            }
        }))
        .catch(err => console.log(err))
    }

    // edit comment

    function editComment(commentId, updatedComment){
        userAxios.put(`/api/comments/${commentId}`, updatedComment)
        .then(res => setCommentState(prevState => {
            return {
                ...prevState,
                comments: prevState.comments.map(comment => comment._id !== commentId ? comment : res.data)
            }
        }))
        .catch(err => console.log(err))
    }

  return (
    <CommentContext.Provider
    value={{
        ...commentState,
        getAllComments,
        getCommentsByBlogId, 
        addComment,
        deleteComment,
        editComment, 
        userAxios
    }}
    >
        {props.children}
    </CommentContext.Provider>
  )
}

export {CommentProvider, CommentContext}