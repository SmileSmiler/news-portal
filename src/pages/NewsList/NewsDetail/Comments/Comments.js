import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editComment, removeComment } from '../../../../store/actions/news-action';

export const Comments = ({ info, postId }) => {
  const dispatch = useDispatch()
  const isAdmin = useSelector(state => state.user.isAdmin)

  const [canEdit, setCanEdit] = useState(false)
  const [editText, setEditText] = useState('')
  const [commentText, setCommentText] = useState('')

  const handleChangeTextarea = (e) => {
    let val = e.target.value
    setEditText(val)
    setCommentText(val)
  }

  const handleEditComment = (id) => {
    dispatch(editComment({ postId: postId, text: editText, id: id }))
    setCanEdit(false)
    setCommentText('')
  }

  const handleChangeComment = (text) => {
    setCommentText(text)
    setCanEdit(true)
  }

  const handleRemoveComment = (id) => {
    dispatch(removeComment({ postId: postId, id: id }))
    setCommentText('')
  }

  return (
    <>
      {canEdit ?
        <div className="comment-section">
          <textarea onChange={handleChangeTextarea} value={commentText}></textarea>
          <button type="button" onClick={() => { handleEditComment(info.id) }}>
            Edit comment!
          </button>
        </div>
        :
        <div className="comment-section">
          <span className="comment">{info.text}</span>
          <button type="button" onClick={() => { handleChangeComment(info.text) }}>
            Edit
          </button>
        </div>
      }
      {isAdmin && <button type="button" onClick={() => handleRemoveComment(info.id)}>Remove comment</button>}
    </>
  )
}