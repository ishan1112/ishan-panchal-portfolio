import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const MainContent = () => {
  return (
    <>
        <div id="home" className="w-full h-screen text-center lg:h-full">
            <div className="max-w-[1200px] w-full h-full mx-auto p-4 flex justify-center items-center">
              <div className="mt-20">
                <p className="uppercase tracking-widest text-gray-600">LETS BUILD SOMETHING TOGETHER</p>
                <h1 className="text-gray-700 py-4 text-[33px]">Welcome to my port <a href=""> https://<span className="text-[#5651e5]">ishan-panchal</span>/</a></h1>
                <h1 className="text-gray-700 py-2">A full-stack Web Developer</h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                As a fresh graduate in Web Development, I am passionate about my work
                and love to code. I discovered my love for programming during my second year of my Bachelors in Computer Application BCA degree and have been coding ever since. My experience has taught me that is not just about writing code, its about creating solutions that meet the needs of clients and users. I am a quick learner, adaptable, and always eager to improve my skills in order to stay up-to-date with the latest technologies.
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4 gap-5">
                  <div className="mt-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-150">
                    <Link href={"https://www.linkedin.com/in/ishanpanchal/"} target="_blank">
                      <FaLinkedinIn className=' text-blue-700'  size={25}/>
                    </Link>
                  </div>
                  <div className="mt-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-150">
                      <Link href={"https://www.instagram.com/ishannn___007/"} target="_blank">
                         <FaInstagram className='text-pink-800' size={25} />
                      </Link>
                  </div>
                  <div className="mt-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-150">
                    <Link href={"https://github.com/ishan1112"} target="_blank">
                     <FaGithub className='' size={25} />
                    </Link>
                  </div>
                  <div className="mt-5 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-90 ease-in duration-150">
                    <Link href={"https://twitter.com/AVI2057011"} target="_blank">
                      <FaTwitter className=' text-blue-500' size={25} />
                    </Link>
                  </div>
                </div>
              </div>
            </div> 
        </div>
    </>
  )
}

export default MainContent