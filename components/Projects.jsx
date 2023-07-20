import React from 'react'
import pro1 from "../public/assets/projects/pro1.png";
import ProjectItems from './ProjectItems';

const Projects = () => {
    const Projects = "<Projects />";
  return (
    <>
        <div id='projects' className="w-full">
            <div className="max-w-[1200px] mx-auto px-2 py-16">
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>{Projects}</p>
                <h2 className="py-4">What Ive Build</h2>
                <div className="grid md:grid-cols-2 gap-8">

                    <ProjectItems proImg={pro1} title="Project - 1" proUrl='/property' />
                    <ProjectItems proImg={pro1} title="Project - 2" proUrl='/property' />
                    <ProjectItems proImg={pro1} title="Project - 3" proUrl='/property' />
                    <ProjectItems proImg={pro1} title="Project - 4" proUrl='/property' />

                </div>
            </div>
        </div>
    </>
  )
}

export default Projects