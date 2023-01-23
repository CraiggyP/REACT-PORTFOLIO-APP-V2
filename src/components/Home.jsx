import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import solo from '../assets/solo.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#0a192f]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          Hi, I'm Craig a Web Developer, Welcome to My Website!
        </h2>
        <p className="text-gray-100 py-4 max-w-md">
           I am currently taking up a Bachelor's Degree in Computer Engineering at Angeles University Foundation. I hope you appreciate my simple portfolio using React JS by 
           Facebook as well as the use of Tailwind CSS.</p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img src={solo} alt="my profile" className="rounded-full h-auto max-w-xs"/>
      </div>
    </div>
  </div>
  );
};
export default Home;
