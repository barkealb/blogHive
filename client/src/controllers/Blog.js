import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {CommentContext} from '../context/CommentProvider'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Comment from './Comment';
import CommentForm from '../forms/CommentForm';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

function Blog(props) {
  
   const { title, imgUrl, blog, _id, deleteBlog, editBlog } = props

   const initState = {
    imgUrl: imgUrl || "",
    title: title || "",
    blog: blog || ''
   }

   const { userAxios } = useContext(CommentContext)

   const [commentState, setCommentState] = useState([])
   

   function getCommentsByBlogId(_id){
    userAxios.get(`/api/comments/${_id}`)
    .then(res => setCommentState((prevState) => [...prevState, ...res.data]))
    .catch(err => console.log(err))
  }

   const [ blogInputs, setBlogInputs ] = useState(initState);

  const [isEditing, setIsEditing] = useState(false)

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false)
    setIsEditing(!isEditing)
  };

  function handleEdit() {
    setIsEditing(!isEditing)
    handleShow()
  }

  function handleDelete() {
    deleteBlog(_id);
  }

  function handleSave(e) {
    e.preventDefault()
    editBlog(_id, blogInputs)
    setIsEditing(false)
    handleClose()
  }

  useEffect(() => {
    getCommentsByBlogId(_id)
  }, [])
  return (
    <div>
      <Dropdown 
      drop="start"
      >
      <Dropdown.Toggle 
      className='text-dark bg-transparent border-0'
      id="dropdown-basic">
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleDelete}>Delete</Dropdown.Item>
        <Dropdown.Item onClick={handleEdit}>Edit</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <CardGroup>
      <Card>
        <Link to={`/blogs/${_id}`}> 
        <Card.Img variant="top" src={imgUrl} />
        </Link>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {blog}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        <CommentForm blogId={_id} />
        {commentState.map(comment => <Comment 
        key={comment._id}
        _id={comment._id}
        comment={comment.comment} 
        user={comment.user}
        />)}
      </Card>
    </CardGroup>
    <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <input
      className="popup-input"
                value={blogInputs.imgUrl}
                onChange={e => setBlogInputs({ ...blogInputs, imgUrl: e.target.value })}
                placeholder="Image" 
                />
      <input
      className="popup-input"
                value={blogInputs.title}
                onChange={e => setBlogInputs({ ...blogInputs, title: e.target.value })}
                placeholder="Title" 
                />
      <textarea
                className="popup-textarea"
                value={blogInputs.blog}
                onChange={e => setBlogInputs({ ...blogInputs, blog: e.target.value })}
                placeholder="Blog" 
                />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  </div>
  )
}

export default Blog