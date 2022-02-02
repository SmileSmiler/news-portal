import { createStore, combineReducers, applyMiddleware } from 'redux'
import { commentsReducer } from './reducers/news-reducer'
import { userReducer } from './reducers/user-reducer';

const allReducers = combineReducers({
  comments: commentsReducer,
  user: userReducer
});

export default createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);