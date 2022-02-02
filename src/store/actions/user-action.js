import { SET_USER, SET_ROLE } from '../types'

export const setUser = (info) => {
  return {
      type: SET_USER,
      payload: info
  }
}

export const setRole = (info) => {
  return {
      type: SET_ROLE,
      payload: info
  }
}