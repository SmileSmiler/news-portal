import { ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT } from '../types'
import { NEWS_INFO } from '../../newsInfo'

const initialState = {
  comments: [
    {
      postId: 0,
      text: 'You are unreal.',
      id: 0
    },
    {
      postId: 0,
      text: 'Finally, a photo worth a billion.',
      id: 1
    },
    {
      postId: 0,
      text: 'Sending this picture to NASA because you are a star.',
      id: 2
    },
    {
      postId: 1,
      text: 'Gosh, looks like the sun came out.',
      id: 0
    },
    {
      postId: 1,
      text: 'Finally, a photo worth a billion.',
      id: 1
    },
  ]
}

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] }
    case EDIT_COMMENT:
      const index = state.comments.findIndex(comment => comment.id === action.payload.id && comment.postId === action.payload.postId)
      const newState = [...state.comments]
      newState[index].text = action.payload.text
      return { ...state, comments: newState }
    case REMOVE_COMMENT:
      const asd = state.comments.filter(comment => {
        if (comment.postId !== action.payload.postId) {
          return comment
        } else {
          if (comment.id !== action.payload.id) {
            return comment
          }
        }
      })
      return { ...state, comments: asd }
    default:
      return state
  }
}
