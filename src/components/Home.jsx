import React from "react";
import myImg from "/myImg-removebg-preview.png";

const Home = () => {
  return (
    <section className="w-full bg-gradient-to-r to-[#dce5ed] from-[#eff5fb] z-10 min-h-[60vh] md:min-h-[80vh]  flex items-center justify-center pb-[3rem] md:pb-[6rem] pt-[5rem] md:pt-[8rem]">
      <div className="w-[80%] grid md:grid-cols-2 gap-8">

       <div className="introduction w-full flex flex-col items-left justify-center gap-1 md:gap-2 md:row-start-1 row-start-2">
          <h5 className="flex items-center gap-3 text-xl font-semibold md:text-3xl">Hello Mate <img src="https://cdn-icons-png.flaticon.com/512/9437/9437514.png" alt="" className="w-[38px]" /></h5>
          <h2 className="text-2xl md:text-4xl">I'm Suman Saha</h2>
          <span className="text-3xl font-semibold md:text-5xl">a <span className="text-[#285fff]">Web Developer</span></span>
          <p className="text-sm font-light leading-6 md:text-lg">Hi, I' m Suman a freelance web designer from India. i help brands turns their ideas into high Quality products.</p>

          <div className="download-cv bg-[#285fff] w-fit p-2 my-2 md:p-4 rounded-2xl text-white font-semibold">
        <a href="/public/Resume - Suman Saha.pdf" download="Suman_CV.pdf">
          <button>Download CV</button>
        </a>
      </div>
       </div>
       <div className="myImg w-full flex items-center justify-center">
        <figure className="w-full flex items-center justify-center">
          <img src={myImg} alt="" className=" md:scale-[1.3] " />
        </figure>
       </div>

      </div>
    </section>
  );
};

export default Home;
