// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { selectCourse } from '../../app/courses/courses.selector'
// import { getCourseData } from '../../utils/firebase/firebase.utils'

export const CourseTable = (Courses) => {
  // const dispatch=useDispatch()

  // useEffect(()=>{
  //   const getCourses= async()=>{
  //     const courseData= await getCourseData()
  //     dispatch(setCourses(courseData))
  //   }
  //   getCourses()
  // })

  const {title,slug,authorId,category} = Courses

  

  return (
    <table className='course-table'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Slug</th>
          <th>Author Id</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{Courses.title}</td>
          <td>{Courses.slug}</td>
          <td>{Courses.authorId}</td>
          <td>{Courses.category}</td>
        </tr>
      </tbody>
    </table>
  )
}
