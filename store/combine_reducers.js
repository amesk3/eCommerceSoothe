import { combineReducers } from 'redux'
import Student_state from './Student/reducer_for_Student'
import Campus_state from './Campus/reducer_for_Campus'

export default combineReducers({
 Student_state,
 Campus_state,
})