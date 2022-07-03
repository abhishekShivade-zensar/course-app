import { createSelector } from "reselect";

const selectCourseReducer = state => state.courseReducer

export const selectCourse = createSelector(
    [selectCourseReducer],
    (course)=>course.courses
)