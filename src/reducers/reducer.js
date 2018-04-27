import {combineReducers} from 'redux'
import {
  POST_SOMETHING,
  VOTE_POST, COMMENT_ON_POST,
} from '../actions'



const initialPostsState = {
  state = {}
  postsApi.getCategories().then((categories)=>{
    state.categories = categories
  })
}


export default combineReducers({

})
