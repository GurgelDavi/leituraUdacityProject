import {combineReducers} from 'redux'
import {
  RECIVE_CATEGORIES
} from '../actions'


function reducer(state = {}, action) {
  switch(action.type){
    case RECIVE_CATEGORIES : 
      return {...state, categories:action.categories}
    default :
      return state
  }
}
export default combineReducers({
  reducer,
})
