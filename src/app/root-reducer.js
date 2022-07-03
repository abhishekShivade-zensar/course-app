
import { combineReducers } from 'redux'
import { courseReducer } from './courses/courses.reducer'

export default combineReducers({
course: courseReducer
})