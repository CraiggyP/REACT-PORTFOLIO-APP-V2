import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300">

      <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
      <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
      <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
      </div> 
      </div>

      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
      <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi! I'm Craig, but you can call me CJ and I'm an aspiring computer engineer.
              </p>
      </div>
      <div>
               <p>
                {" "}
                4 years into my studies, I have found that being an engineering student is quite challenging,
                But nevertheless, I am still grateful for what I have and what I have learned so far. Being an
                irregular student really is tolling on the psychological aspect of studying college, but I know
                it would all be worth it in the end, I just have to keep on fighting and doing my best to succeed
                in getting my degree which would then be my stepping stone to also be successful in life.
              </p>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};
export default About;