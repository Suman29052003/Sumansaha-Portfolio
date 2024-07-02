import React from 'react'

const Service = () => {
  return (
    <section className='w-full min-h-[60vh] bg-white flex justify-center items-center pt-8 pb-8' id='service'>
        <div className="w-[80%] flex flex-col gap-8">
            <div className="w-full heading flex flex-col items-center gap-4">
                <h2 className="w-full text-[#0285ff] text-2xl font-semibold md:text-center text-left">My Expertise</h2>
                <h4 className="text-4xl font-light">Awesome Services For You</h4>
            </div>

            <div className="skills-card grid md:grid-cols-3 place-content-center gap-4">

                <div className="card w-full md:w-[80%] border-2 border-gray-300 hover:border-0 p-8 rounded-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer hover:shadow-xl">
                        <div className="grid grid-cols-3 gap-3">
                            <figure className='w-full grid place-content-center'>
                                <img src="https://cdn-icons-png.flaticon.com/512/10762/10762888.png" alt="" className='w-full' />
                            </figure>
                            <div className="card-text col-span-2 grid gap-4">
                                <h3 className="text-2xl font-semibold text-[#0285ff]">Web Design</h3>
                                <p className="text-pretty text-sm font-light">Expert in designing visually appealing, user-friendly, and responsive websites professionally. </p>
                            </div>
                        </div>
                </div>

                <div className="card w-full md:w-[80%] border-2 border-gray-300 hover:border-0 p-8 rounded-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer hover:shadow-xl">
                        <div className="grid grid-cols-3 gap-3">
                            <figure className='w-full grid place-content-center'>
                                <img src="https://cdn-icons-png.flaticon.com/512/4476/4476194.png" alt="" className='w-full' />
                            </figure>
                            <div className="card-text col-span-2 grid gap-4">
                                <h3 className="text-2xl font-semibold text-[#0285ff]">Web Development</h3>
                                <p className="text-pretty text-sm font-light">Proficient in creating professional, responsive websites with modern web technologies.</p>
                            </div>
                        </div>
                </div>

                <div className="card w-full md:w-[80%] border-2 border-gray-300 p-8 rounded-xl hover:scale-[1.05] transition-all duration-300 cursor-pointer hover:shadow-xl hover:border-0">
                        <div className="grid grid-cols-3 gap-3">
                            <figure className='w-full grid place-content-center'>
                                <img src="https://cdn-icons-png.flaticon.com/512/6052/6052395.png" alt="" className='w-full' />
                            </figure>
                            <div className="card-text col-span-2 grid gap-4">
                                <h3 className="text-2xl font-semibold text-[#0285ff]">UI/UX Design</h3>
                                <p className="text-pretty text-sm font-light">Skilled in intuitive UI/UX design for seamless user experiences on web platforms.</p>
                            </div>
                        </div>
                </div>

                 
            </div>
        </div>
    </section>
  )
}

export default Service
