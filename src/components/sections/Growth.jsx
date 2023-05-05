import React from "react";
import Button from "../commons/Button";
import { smallAnimation } from "@/constants/animations";
const image = "https://vpn1.netlify.app/static/media/map.1269c3fd.svg";
import { motion } from "framer-motion";
const Growth = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-[3rem]">
      <div className="flex flex-col gap-2 md:gap-4 ">
        <motion.div
          {...smallAnimation}
          className=" text-[#0450FA] font-semibold bg-gray-50 w-[140px] md:w-[200px] py-2 md:py-3 flex items-center justify-center rounded-md mx-auto">
          {" "}
          Our Growth
        </motion.div>
        <motion.h1
          {...smallAnimation}
          className="text-gray-50 text-[2rem] md:text-[2.5rem] font-semibold text-center">
          Global Coverage
        </motion.h1>
        <motion.p
          {...smallAnimation}
          className="text-gray-300 text-sm  max-w-[500px] text-center">
          We are proud of our growth and global coverage. Over the years, we
          have expanded our services and infrastructure to meet the needs of
          businesses around the world. With our global coverage, we are able to
          provide our customers with access to our services from anywhere in the
          world, making it easy to connect and collaborate with colleagues and
          clients across borders.
        </motion.p>
      </div>
      <div className="relative">
        <img src={image} />
        <div className="absolute w-[20px] h-[20px] left-[4rem] top-[2rem]  md:h-[35px] md:w-[35px] border-[5px] rounded-full border-red-600 md:top-[10rem] md:right-[15rem] animate-pulse"></div>
        <div className="absolute w-[20px] h-[20px] right-[5rem] top-[2rem] md:h-[35px] md:w-[35px] border-[5px] rounded-full border-red-600 md:top-[10rem] md:left-[10rem] animate-pulse"></div>
        <div className="absolute w-[20px] h-[20px] bottom-[2rem] left-[40%] md:h-[35px] md:w-[35px] border-[5px] rounded-full border-red-600 md:bottom-[10rem] md:left-[50%] animate-pulse"></div>
      </div>
    </div>
  );
};

export default Growth;
