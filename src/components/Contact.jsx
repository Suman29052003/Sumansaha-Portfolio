import React from 'react'


const Contact = () => {
  return (
    <section id='contact' className='w-full min-h-[30vh] md:min-h-[60vh] bg-[#232d39] flex flex-col items-center justify-center'>
        <div className="w-[80%] flex items-center justify-center flex-col gap-3">
            <spn className="text-gray-300 font-semibold">CONTACT ME</spn>
            <h1 className="text-white text-2xl md:text-5xl font-medium text-center">Get A Project? Let's Talk!</h1>
        </div>

        <footer className='relative top-[1rem] md:top-[9rem] m-4 p-2 w-[80%] h-12 flex flex-col md:flex-row items-center justify-between border-t-2 '>
        <div className="icons flex gap-4 invert-[80%]">
                <a href="https://www.facebook.com/profile.php?id=100015689491741" className=""><img src="/public/facebook.png" alt="" className="w-[20px]" /></a>
                <a href="https://www.instagram.com/sum4.an/" className=""><img src="/public/instagram.png" alt="" className="w-[20px]" /></a>
                <a href="https://www.linkedin.com/in/suman-saha-225958291/" className=""><img src="/public/linkedin.png" alt="" className="w-[20px]" /></a>
                <a href="https://github.com/Suman29052003" className=""><img src="/public/github (1).png" alt="" className="w-[20px]" /></a>
                <a href="https://x.com/Dev_Suman07" className=""><img src="/public/twitter.png" alt="" className="w-[20px]" /></a>
              </div>

              <div className="copyright invert-[80%] text-nowrap p-2">
              <p>&copy; 2024 Suman Saha. All rights reserved.</p>
              </div>
        </footer>
    </section>
  )
}

export default Contact
