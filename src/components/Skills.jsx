import React from 'react'
import htmlIcon from '../../public/html-icon.jpg'
import cssIcon from '../../public/css-icon.jpg'
import jsIcon from '../../public/js-icon.jpg'
import reactIcon from '../../public/react-icon.jpg'
import tailwindIcon from '../../public/tailwind-icon.png'
import nodeIcon from '../../public/node-icon.png'
import expressIcon from '../../public/express-icon.png'
import mongodbIcon from '../../public/mongo-icon.jpg'
import githubIcon from '../../public/github-icon.png'

const Skills = () => {
  return (
    <section className='w-full min-h-[60vh] bg-[#f8f9fd] flex justify-center items-center pt-8 pb-8' id='skills'>
      <div className="w-[80%] grid md:grid-cols-2 gap-8">
        <div className="text-container w-full gap-4 flex flex-col justify-center items-left">
            <h2 className="text-[#0285ff] text-3xl font-semibold">SKILLSET</h2>
            <p className="text-3xl font-medium">Creative Skills Experience on Few Area</p>
            <p className="leading-8 text-md font-light text-justify md:text-pretty text-gray-500">Creative and skilled Full Stack Developer with experience in JavaScript, React, Node.js, and MongoDB. Proficient in developing dynamic, user-friendly web applications. Passionate about solving complex problems and optimizing performance. Committed to staying updated with industry trends to deliver cutting-edge solutions.</p>
        </div>
        
        <div className="graph-container w-full flex flex-col gap-4 grid md:grid-cols-3 grid-cols-2" >

            <div className="html hover:scale-105 duration-200 cursor-pointer">
                <span className="flex py-2 gap-2 text-sm font-medium"><img src={htmlIcon} alt="" className="w-[24px]" />HTML</span>
                <div className="w-[80%] h-2 bg-slate-200 rounded-full">
                    <div className="bg-[#83bdf5] w-[75%] h-2 rounded-full"></div>
                </div>
            </div>

            <div className="css hover:scale-105 duration-200 cursor-pointer">
            <span className="flex py-2 gap-2 text-sm font-medium"><img src={cssIcon} alt="" className="w-[24px]" />CSS</span>
            <div className="w-[80%] h-2 bg-slate-200 rounded-full">
                    <div className="bg-[#83bdf5] w-[78%] h-2 rounded-full"></div>
                </div>
            </div>

            <div className="js hover:scale-105 duration-200 cursor-pointer">
            <span className="flex py-2 gap-2 text-sm font-medium"><img src={jsIcon} alt="" className="w-[24px]" />JAVASCRIPT</span>
            <div className="w-[80%] h-2 bg-slate-200 rounded-full">
                    <div className="bg-[#83bdf5] w-[60%] h-2 rounded-full"></div>
                </div>
            </div>

            <div className="react hover:scale-105 duration-200 cursor-pointer">
            <span className="flex py-2 gap-2 text-sm font-medium"><img src={reactIcon} alt="" className="w-[24px]" />REACT JS</span>
            <div className="w-[80%] h-2 bg-slate-200 rounded-full">
                    <div className="bg-[#83bdf5] w-[65%] h-2 rounded-full"></div>
                </div>
            </div>

            <div className="tailwind hover:scale-105 duration-200 cursor-pointer">
            <span className="flex py-2 gap-2 text-sm font-medium"><img src={tailwindIcon} alt="" className="w-[24px]" />TAILWIND CSS</span>
            <div className="w-[80%] h-2 bg-slate-200 rounded-full">
                    <div className="bg-[#83bdf5] w-[70%] h-2 rounded-full"></div>
                </div>
            </div>

            <div className="node hover:scale-105 duration-200 cursor-pointer">
            <span className="flex py-2 gap-2 text-sm font-medium"><img src={nodeIcon} alt="" className="w-[24px]" />NODE JS</span>
            <div className="w-[80%] h-2 bg-slate-200 rounded-full">
                    <div className="bg-[#83bdf5] w-[68%] h-2 rounded-full"></div>
                </div>
            </div>

            <div className="express hover:scale-105 duration-200 cursor-pointer">
            <span className="flex py-2 gap-2 text-sm font-medium"><img src={expressIcon} alt="" className="w-[24px]" />EXPRESS JS</span>
            <div className="w-[80%] h-2 bg-slate-200 rounded-full">
                    <div className="bg-[#83bdf5] w-[55%] h-2 rounded-full"></div>
                </div>
            </div>

            <div className="mongodb hover:scale-105 duration-200 cursor-pointer">
            <span className="flex py-2 gap-2 text-sm font-medium"><img src={mongodbIcon} alt="" className="w-[24px]" />MONGO DB</span>
            <div className="w-[80%] h-2 bg-slate-200 rounded-full">
                    <div className="bg-[#83bdf5] w-[50%] h-2 rounded-full"></div>
                </div>
            </div>

            <div className="git hover:scale-105 duration-200 cursor-pointer">
            <span className="flex py-2 gap-2 text-sm font-medium"><img src={githubIcon} alt="" className="w-[24px]" />GIT & GITHUB</span>
            <div className="w-[80%] h-2 bg-slate-200 rounded-full">
                    <div className="bg-[#83bdf5] w-[60%] h-2 rounded-full"></div>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
