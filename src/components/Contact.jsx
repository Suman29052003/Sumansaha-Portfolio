import React from 'react'
import facebookIcon from '../../public/facebook.png'
import instagramIcon from '../../public/instagram.png'
import linkedinIcon from '../../public/linkedin.png'
import githubIcon from '../../public/github (1).png'
import twitterIcon from '../../public/twitter.png'

const Contact = () => {
  return (
    <section id='contact' className='w-full min-h-[40vh] md:min-h-[60vh] bg-[#232d39] flex flex-col items-center justify-center'>
        <div className="w-[80%] flex items-center justify-center flex-col gap-3">
            <spn className="text-gray-300 font-semibold">CONTACT ME</spn>
            <h1 className="text-white text-2xl md:text-5xl font-medium text-center">Get A Project? Let's Talk!</h1>
        </div>

        <footer className='relative top-[1rem] md:top-[9rem] m-4 p-2 w-[80%] h-12 flex flex-col md:flex-row items-center justify-between border-t-2 '>
        <div className="icons flex gap-8 invert-[40%] p-6">
                <a href="https://www.facebook.com/profile.php?id=100015689491741" className=""><img src={facebookIcon} alt="" className="" /></a>
                <a href="https://www.instagram.com/sum4.an/" className=""><img src={instagramIcon} alt="" className="" /></a>
                <a href="https://www.linkedin.com/in/suman-saha-225958291/" className=""><img src={linkedinIcon} alt="" className="" /></a>
                <a href="https://github.com/Suman29052003" className=""><img src={githubIcon} alt="" className="" /></a>
                <a href="https://x.com/Dev_Suman07" className=""><img src={twitterIcon} alt="" className="" /></a>
              </div>

              <div className="copyright invert-[80%] text-nowrap p-">
              <p>&copy; 2024 Suman Saha. All rights reserved.</p>
              </div>
        </footer>
    </section>
  )
}

export default Contact
