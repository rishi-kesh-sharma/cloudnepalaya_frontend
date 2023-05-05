import React from "react";
import SectionSubtitle from "../commons/SectionSubtitle";
import SectionDescription from "../commons/SectionDescription";
import SectionTitle from "../commons/SectionTitle";
import FeaturesCards from "../FeaturesCards";
import Image from "next/image";
import { motion } from "framer-motion";
import { smallAnimation } from "@/constants/animations";

const Features = () => {
  return (
    <div className="flex flex-col gap-[1rem] md:gap-[2rem] lg:gap-[4rem]">
      <div>
        <SectionTitle
          $as={motion.h4}
          {...smallAnimation}
          className=" text-sm md:text-[1rem] text-center text-blue-600 font-semibold  ml-[1rem] rounded-md bg-blue-100 max-w-[150px] py-[0.3rem] mx-auto">
          Our Core Features
        </SectionTitle>
        <SectionSubtitle
          $as={motion.h1}
          {...smallAnimation}
          className="text-center text-[1.6rem] md:text-[2rem] ">
          Our Features
        </SectionSubtitle>
        <SectionDescription $as={motion.p} {...smallAnimation} className="">
          At our cloud service company, we pride ourselves on offering a range
          of powerful features to help you get the most out of your cloud
          services
        </SectionDescription>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] justify-start items-center">
        <div className="flex items-center justify-center">
          <img
            src={"https://vpn1.netlify.app/static/media/about3.09c5ee1c.png"}
            className="w-full"
          />
        </div>
        <FeaturesCards />
      </div>
    </div>
  );
};

export default Features;
