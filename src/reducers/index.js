import {combineReducers} from 'redux'
import {
VOTE_POST,
POST_SOMETHING,
COMMENT_ON_POST
} from '../actions'

function reducer(state = {}, action) {
  switch(action.type){
    default :
      return state
  }
}
export default combineReducers({
  reducer,
})
