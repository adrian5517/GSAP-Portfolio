import { motion } from 'framer-motion';
import { useState } from 'react';
import {FiGithub , FiFacebook , FiLinkedin ,FiMenu , FiX} from 'react-icons/fi';




const Header = () => {

  const [isOpen , setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  //State to track if the contact form is open
  const [contactOpen, setContactOpen] = useState(false);
  const openContactForm = ()=> setContactOpen(true);
  const closeContactForm = () => setContactOpen(false);

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className='container 
      mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20'>
        {/* Logo Name */}
        <motion.div 
        initial={{ opacity: 0, x: -100}}
        animate={{ opacity: 1, x: 0}}
        transition={{
            type: 'spring',
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
        }}
        className='flex items-center'>

          <div className='h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600
          font-bold text-xl mr-3'>AB</div>

          <span className="font-poppins text-white text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100
          bg-clip-text text-transparent">AdrianBoncodin</span>

            
        </motion.div>
        {/* Navigation Links */}
        <nav className='lg:flex hidden space-x-8'>
        {["Home", "About", "Projects", "Contact"].map((item,index) =>(
          <motion.a 
          key={item}
          initial={{ opacity: 0, y: -20}}
          animate={{ opacity: 1 , y: 0}}
          transition={{
            type: 'spring',
            stiffness:100,
            damping: 20,
            delay: 0.7 + index * 0.2,
          }}
          className='relative font-poppins text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400
          font-medium transition-colors duration-300 group'
          href='#'>{item}
          <span className="absolute bottom-0 left-0 w-0 h-0.5
          bg-violet-600 group-hover:w-full transition-all duration-300 "></span>
          </motion.a>
        ))}
      </nav>

      {/* Social Icons Desktop */}

      <div className='md:flex hidden items-center space-x-4'>
        {/* Github Icon */}
        <motion.a 
        initial={{ opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{delay: 1.3, duration: 0.5}}
        className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 
        transition-colors duration-300' 
        href="#">
          <FiGithub className='w-5 h-5' />
        </motion.a>

        {/* Facebook Icon */}
        <motion.a 
        initial={{ opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{delay: 1.3, duration: 0.5}}
        className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 
        transition-colors duration-300' 
        href="#">
          <FiFacebook className='w-5 h-5' />
        </motion.a>

        {/* LinkedIn Icon */}
        <motion.a 
        initial={{ opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{delay: 1.3, duration: 0.5}}
        className='text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 
        transition-colors duration-300' 
        href="#">
          <FiLinkedin className='w-5 h-5' />
        </motion.a>
      </div>

      {/* Hire Me Button */}
      <motion.button 
      onClick={openContactForm}
      initial={{ opacity: 0 , scale: 0.8}}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay:1.6,
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
      className='ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400
      to-gray-200 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white
      transition-all duration-500'>Hire Me</motion.button>

      {/* Mobile Menu */}
      <div className='md:hidden flex items-center'>
        <motion.button 
        whileTap={{ scale: 0.7 }}
        onClick={toggleMenu}
        className='text-gray-300'>
          {isOpen ? <FiX className='w-6 h-6' /> : <FiMenu className='w-6 h-6' />}
        </motion.button>
      </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
      initial={{ opacity : 0, height: 0 }}
      animate={{
        opacity: isOpen ? 1 : 0,
        height: isOpen ? "auto" : 0,
      }}
      transition={{
        duration: 0.5
      }}
      className='md:hidden overflow-hidden bg-white dark:bg-gray-900
      shadow-lg px-4 py-5 space-y-5'>
        <nav className='flex flex-col space-y-4 font-poppins'>
          {["Home","About", "Projects", "Contact"].map((item)=>(
            <a 
            className='text-gray-300 font-medium py-2'
            onClick={toggleMenu}
            key={item}
            href='#'>{item}</a>
          ))}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className='flex space-x-5'>

          <a href="#">
            <FiGithub className='w-5 h-5' text-gray-300/>
          </a>

           <a href="#">
            <FiFacebook className='w-5 h-5' text-gray-300/>
          </a>

           <a href="#">
            <FiLinkedin className='w-5 h-5' text-gray-300/>
          </a>

          </div>

          <button 
          onClick={()=>{
            toggleMenu();
          }}
          className='mt-4 block w-full px-4 py-2 font-poppins text-center text-white
          rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-semibold'>Contact me</button>

        </div>
      </motion.div>


      {/* Contact Form Modal */}
      {contactOpen && (
        <motion.div 
        initial={{opacity: 0,}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4"
        >

          <div className='bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6'>
            <div className='flex justify-between items-center mb-4'>
              <h1 className='text-2xl font-bold text-gray-300'>Get in Touch</h1>

              <button onClick={closeContactForm}>
                <FiX className='w-5 h-5 text-gray-300 font-extrabold' />
              </button>
            </div>
            {/* input fields for name, email, message */}
              <form className="space-y-4">
                <div>
                  {/* Name */}
                  <label htmlFor="name" className='block text-sm font-medium text-gray-300 mb-1'>Name</label>
                  <input type="text" id="name" placeholder='Enter your Name' className='w-full px-4 py-2 border border-gray-600
                  rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700' />
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="email" className='block text-sm font-medium text-gray-300 mb-1'>Email</label>
                  <input type="email" id="email" placeholder='Enter your Email' className='w-full px-4 py-2 border border-gray-600
                  rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700' />
                </div>
                {/* Message */}
                <div>
                  <label htmlFor="message" className='block text-sm font-medium text-gray-300 mb-1'>Message</label>
                  <textarea rows="4" id="message" placeholder='How can we help you?' className='w-full px-4 py-2 border border-gray-600
                  rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700' />
                </div>

              </form>

          </div>

        </motion.div>
      )}

    </header>
  )
}

export default Header
