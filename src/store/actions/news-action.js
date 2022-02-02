import { ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT } from '../types'

export const addComment = (info) => {
  return {
      type: ADD_COMMENT,
      payload: info
  }
}

export const editComment = (info) => {
  return {
      type: EDIT_COMMENT,
      payload: info
  }
}

export const removeComment = (info) => {
  return {
      type: REMOVE_COMMENT,
      payload: info
  }
}