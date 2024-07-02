import React from 'react'

const About = () => {
  return (
    <section className='w-full min-h-[60vh] bg-white flex justify-center items-center pt-8 pb-4' id='about '>
      <div className="w-[80%] grid grid-cols-1  md:grid-cols-2">
        <div className="image-container w-full flex ">
            <figure className="w-full relative bottom-0 flex md:items-end items-center justify-center md:top-4">
                <img src="/public/person-pointing-finger.png" alt="" className="w-[70%]" />
            </figure>
        </div>
        <div className="text-container flex justify-center items-left gap-4 flex-col">
          <h1 className="text-[#0285ff] text-3xl text-center md:text-left font-semibold pt-3 md:pt-0">ABOUT ME</h1>
          <span className="text-lg font-light md:text-left text-center">More Than 1+ Years Programming Experienced</span>
          <p className="text-md md:text-pretty text-justify font-light leading-7">As a passionate Full Stack Developer, I specialize in creating dynamic, responsive web applications. With a solid foundation in both front-end and back-end technologies, I excel in JavaScript, React, Node.js, and MongoDB. I thrive on solving complex problems, optimizing performance, and delivering user-friendly solutions. With a keen eye for detail and a commitment to staying updated with industry trends, I ensure every project I work on is cutting-edge and meets client expectations. Let's build something amazing together!</p>

          <div className="introduction flex flex-col md:grid grid-cols-2 gap-4">
             <div className=""><span className="font-semibold">Name : </span><span className="font-light">Suman Saha</span></div>
             <div className=""><span className="font-semibold">Location : </span><span className="font-light">West Bengal, India</span></div>
             <div className="col-span-2 text-sm md:text-md"><span className="font-semibold">Email : </span><span className="font-light">sumansahaweb.dev@gmail.com</span></div>
          </div>

          <div className="social-icons w-full flex items-center justify-around flex-col md:flex-row gap-3">
              <div className="line w-[200px] md:w-16 bg-slate-300 h-1"></div>
              <div className=""><span className="text-lg font-light">Follow me</span></div>
              <div className="icons flex gap-4 invert-[40%]">
                <a href="https://www.facebook.com/profile.php?id=100015689491741" className=""><img src="/public/facebook.png" alt="" className="" /></a>
                <a href="https://www.instagram.com/sum4.an/" className=""><img src="/public/instagram.png" alt="" className="" /></a>
                <a href="https://www.linkedin.com/in/suman-saha-225958291/" className=""><img src="/public/linkedin.png" alt="" className="" /></a>
                <a href="https://github.com/Suman29052003" className=""><img src="/public/github (1).png" alt="" className="" /></a>
                <a href="https://x.com/Dev_Suman07" className=""><img src="/public/twitter.png" alt="" className="" /></a>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
