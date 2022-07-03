import { COURSE_ACTION_TYPES } from "./courses.types";

export const COURSE_INITIAL_STATE = {
    Courses: []
}

export const courseReducer = (state = COURSE_INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case COURSE_ACTION_TYPES.SET_COURSE_DATA:
            return {
                ...state,
                Courses: payload
            }

        case COURSE_ACTION_TYPES.GET_COURSES_DATA:
            return {
                ...state,
                Courses: payload
            }

        default:
            return state
    }
}