import React from "react";
import Button from "../commons/Button";
import HomeCards from "../HomeCard";

const Hero = () => {
  return (
    <div className="flex flex-col gap-3 pt-[5rem] pb-[3rem] md:pb-[5rem] lg:pb-[1rem]">
      <h3 className="text-[#467CFB]  md:text-xl  font-semibold flex items-center gap-[0.5rem]">
        <span className="w-[30px] h-[2px] bg-[#39f9f9]"></span>
        <span>Complete VPN and Cloud Solutions</span>
      </h3>
      <h1 className="text-[#1f2471] text-[2rem] md:text-[3rem] font-[600] max-w-[600px]">
        Fastest VPN and Proxy Solutions you need.
      </h1>
      <p className="max-w-[600px] text-sm text-gray-400 md:text-[1rem]">
        Take advantage of the latest technologies to increase your productivity,
        streamline your operations, and reduce your costs with our secure,
        scalable, and reliable cloud services. Whether you need to store and
        manage your data, run your applications, or collaborate with your team,
        we have the expertise and infrastructure to meet your unique needs.
      </p>
      <div className="flex gap-[1rem] mt-6 flex-wrap">
        <a href="/contact">
          <Button className="uppercase font-semibold text-sm bg-gradient-to-r from-sky-400 to-lime-900 text-gray-100 px-6 py-3 md:py-4 md:px-9 rounded-md">
            Get Quote
          </Button>
        </a>
        <a href="/contact">
          <Button className="uppercase font-semibold text-sm bg-gradient-to-r from-sky-400 to-lime-900 text-gray-100 py-3 px-6 md:py-4 md:px-9 rounded-md">
            Learn More
          </Button>
        </a>
      </div>
      <HomeCards />
    </div>
  );
};

export default Hero;
