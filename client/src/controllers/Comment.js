import React, {useContext, useState, useEffect} from 'react'
import CommentForm from '../forms/CommentForm';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { CommentContext } from '../context/CommentProvider';

function Comment(props) {

    const { comment, user: {username}, _id } = props
    

    const { deleteComment, editComment } = useContext(CommentContext); 
    

    const initState = {
        comment: comment || ""
    };

    const [ commentInputs, setCommentInputs ] = useState(initState);

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
      deleteComment(_id);
    }
  
    function handleSave(e) {
      e.preventDefault()
      editComment(_id, commentInputs)
      setIsEditing(false)
      handleClose()
    }


  return (
    <div className='comment-container'>
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
        <div className='circle'>{username}</div>
        <p>{comment}</p>
        <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <input
      className="popup-input"
                value={commentInputs.comment}
                onChange={e => setCommentInputs({ ...commentInputs, comment: e.target.value })}
                placeholder="Comment" 
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

export default Comment