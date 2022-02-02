import { SET_USER, SET_ROLE } from '../types'

const initialState = {
  isAdmin: true//!!!false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLE:
      const user = { ...state }
      if (action.payload) user.isAdmin = true
      return { ...user }
    case SET_USER:
      const userInfo = action.payload
      return {...state, userInfo}
    default:
      return state
  }
}