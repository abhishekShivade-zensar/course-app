import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'

const defaultFormFeilds = {
    title: '',
    slug: '',
    authorId: '',
    category: ''
}

export const CourseForm = () => {
    const [formFeilds, setFormFeilds] = useState(defaultFormFeilds)
    const { title, slug, authorId, category } = formFeilds

    const resetFormFeilds = () => {
        setFormFeilds(defaultFormFeilds)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFeilds({ ...formFeilds, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (title.length < 3 || slug.length < 3 || category.length < 3) {
            alert('Please fill data correctly')
        }
        try {
            const { course } = await
            // createNewCourse(title, slug, authorId, category)
            resetFormFeilds()
        } catch (error) {
            /* write code for course already exists
            if(error.code===){
                alert('Course already exists')
            } else {
                console.log(`error occured while creating new course ${error}`)
            }
             */
            console.log(`error occured while creating new course ${error}`)
        }
    }

    return (
        <div className=''>
            <h2>Add New Course</h2>
            <form onSubmit={handleSubmit} className='form form-container ' >
                <FormInput
                    type='text'
                    required
                    onChange={handleChange}
                    name='title'
                    value={title}
                    placeholder='title' />

                <FormInput
                    type='text'
                    required
                    onChange={handleChange}
                    name='slug'
                    value={slug}
                    placeholder='slug' />

                <FormInput
                    type='number'
                    required
                    onChange={handleChange}
                    name='authorId'
                    value={authorId}
                    placeholder='Author Id' />

                <FormInput
                    type='text'
                    required
                    onChange={handleChange}
                    name='category'
                    value={category}
                    placeholder='category' />

                <button type='submit'>Add Course</button>
            </form>
        </div>
    )
}
