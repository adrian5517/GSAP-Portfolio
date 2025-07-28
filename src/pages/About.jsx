import React from 'react'

const About = () => {
  return (
    <div className='@container mx-auto h-screen 
    flex flex-col items-center justify-evenly 
    text-center p-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
      <h1 className='text-4xl font-bold'>About Me</h1>
      <p className='mt-4 text-lg max-w-2xl mx-auto'>
        I'm a MERN stack web and mobile developer focused on building responsive, user-friendly applications that solve real-world problems and support business growth. I specialize in both front-end and back-end development, delivering clean, maintainable, and high-quality solutions that meet client needs and exceed user expectations.
      </p>
      {/* Card */}
      <div className='mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg max-w-md'>
        <h2 className='text-2xl font-semibold mb-2'>My Skills</h2>
        <ul className='list-disc list-inside space-y-1'>
          <li>JavaScript, React, Node.js</li>
          <li>Responsive Design</li>
          <li>RESTful APIs</li>
          <li>Database Management (MongoDB)</li>
          <li>Version Control (Git)</li>
        </ul>
      </div>

    </div>

  )
}

export default About
