import axios from "axios";
import { COURSE_ACTION_TYPES } from "./courses.types";

export const createAction=(type,payload)=>({type,payload})

export const setCourses=(courseData)=>createAction(COURSE_ACTION_TYPES.SET_COURSE_DATA,courseData)

export const getCourses=()=> async dispatch=>{
    try{
        const res = await axios.get(`http://localhost:5000/courses`)
        dispatch({
            type:COURSE_ACTION_TYPES.GET_COURSES_DATA,
            payload: res.data
        })
    } catch(e){
        dispatch({
            type:COURSE_ACTION_TYPES.COURSES_ERROR,
            payload: console.log(e)
        })
    }
}