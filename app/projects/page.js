import React from 'react'
import ProjectLayout from './projectLayout'
import allProjects from '@/Components/Projects/allProject'
const page = () => {
    return (
        <>
            <allProjects />
            <ProjectLayout />
        </>
    )
}

export default page