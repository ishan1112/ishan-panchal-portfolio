import Image from "next/image";
import React from "react";
import about from "../public/assets/projects/aboutimg.jpg";

const About = () => {
  const LatestProject = "No Projects Yet!";
  const About = "<About />";
  const notNormalDev = " {/* I am not a boring Developer */}";
  return (
    <>
      <div
        id="about"
        className="w-full md:h-screen p-2 flex items-center py-16"
      >
        <div className="max-w-[1200px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">
              {About}
            </p>
            <h2 className="uppercase py-4">Who I am</h2>
            <p className="py-3 text-gray-700">{notNormalDev}</p>
            <p className="py-3 text-gray-600">
              As a fresher in ReactJS, and other web development technologies, I
              have a strong passion for coding and a deep desire to learn and
              grow. I am a self-motivated learner who has worked with foreign
              clients and understands their expectations. Through my experience,
              I have gained the ability to communicate effectively and work
              collaboratively in a team environment. In my personal time,
            </p>
            <p className="py-3 text-gray-600">
              I enjoy working on my own projects and experimenting with new
              technologies. I am constantly learning from online resources like
              YouTube and other educational platforms to develop my skills and
              stay current with the latest web development trends. I am
              confident that my strong work ethic, combined with my technical
              knowledge and interpersonal skills, make me an ideal candidate for
              any web development role.I jus everything from Youtube and Old internship companys i know how business works but i need to gain more experience so i am ready to go, this is my pation and i will follow it until i have not achive enough, what i have to.
            </p>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              {LatestProject}
            </p>
          </div>
          <div className="w-[90%] h-[87%] m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-90 ease-in-out duration-300">
            {/* Because using unsplash URL Otherwise must use <Image/ > component */}
            {/* <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" className="rounded-xl shadow-xl shadow-black drop-shadow-xl" /> */}
            <Image
              src={about}
              className="rounded-xl shadow-xl shadow-black drop-shadow-xl"
              alt="img1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
