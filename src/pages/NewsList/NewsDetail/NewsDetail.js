import { NEWS_INFO } from '../../../newsInfo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, editComment, removeComment } from '../../../store/actions/news-action'
import { Comments } from './Comments/Comments';

export const NewsDetail = ({ postId, handleGoBack }) => {
  const dispatch = useDispatch()

  const allComments = useSelector(state => state.comments.comments)

  const postComments = []
  allComments.forEach(comment => {
    if (comment.postId == postId) postComments.push(comment)
  })
  const news = NEWS_INFO.find(news => news.id == postId)

  const [inputText, setInputText] = useState('')
  const [idForNewCom, setIdForNewCom] = useState(postComments ? postComments.length : 0)

  const handleChangeInput = (e) => {
    let val = e.target.value
    setInputText(val)
  }

  const handleAddComment = () => {
    if (inputText == "") return
    dispatch(addComment({ postId: postId, text: inputText, id: idForNewCom }))
    setIdForNewCom(prev => prev + 1)
    setInputText('')
  }

  return (
    <>
      <div style={{marginBottom: 5}}>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
      <div className='news-detail'>{news.text}</div>
      <div>
        <div style={{marginBottom: 5}}>Comments:</div>
        {postComments.map(comment => {
          return (
            <Comments key={comment.id}
              info={comment}
              postId={postId}
            />
          )
        })
        }
        <div style={{marginTop: 10}}>
          <input style={{marginRight: 10}} type="text" onChange={handleChangeInput} value={inputText} placeholder="Write something..."/>
          <button type="button" onClick={handleAddComment}>Add comment</button>
        </div>

      </div>
    </>
  );
}
