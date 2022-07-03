import React from 'react'
// import { Outlet } from 'react-router-dom'
// import { selectCourse } from '../../app/courses/courses.selector'
import { CourseForm } from '../course-form/course-form.component'
import { CourseTable } from '../course-table/course-table.component'
import './courses.styles.css'
import { useSelector } from 'react-redux'
// import Header from '../header/header.component'

export const CoursesPage = (props) => {
  // const courseItems=useSelector(selectCourse)

  // const {Courses}=props.courses
  console.log(props)
  return (
    <div>
      {/* <Outlet /> */}
      {/* <Header/> */}
      <h1 className='mx-auto heading'>Read Learn Develop</h1>
      <div className='course-page-container'>
        {/* {courseItems.map(Courses=> <CourseTable key={Courses.id} courses={Courses} />)} */}
        <CourseTable/>
        {/* {Courses.map(Courses=> <CourseTable key={Courses.id} courses={Courses} />)}         */}

        <CourseForm/>
      </div>
    </div>
  )
}
