import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Project = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Project
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
            src='/NextWebsite.png'
            title='Modern Next.js Portfolio'
            description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal'
            />
            <ProjectCard
            src='/CardImage.png'
            title='Interactive Website Cards'
            description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal'
            />
            <ProjectCard
            src='/SpaceWebsite.png'
            title='Space Themed Website'
            description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal'
            />
        </div>
    </div>
  )
}

export default Project