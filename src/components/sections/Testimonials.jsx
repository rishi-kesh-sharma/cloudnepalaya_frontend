import React from "react";
import SectionSubtitle from "../commons/SectionSubtitle";
import SectionDescription from "../commons/SectionDescription";
import SectionTitle from "../commons/SectionTitle";
import TestimonialsSlider from "../TestimonialsSlider";
import { motion } from "framer-motion";
import { smallAnimation } from "@/constants/animations";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div>
        <SectionTitle
          $as={motion.p}
          {...smallAnimation}
          className="text-[1rem]  text-blue-600 font-semibold  ml-[1rem] rounded-md bg-blue-100 max-w-[180px] py-[0.3rem] mx-auto">
          Our Testimonials
        </SectionTitle>
        <SectionSubtitle
          $as={motion.h1}
          {...smallAnimation}
          className="text-center text-[2rem]  md:text-[2rem] font-semibold">
          Loved By Our Clients
        </SectionSubtitle>
        <SectionDescription
          $as={motion.p}
          {...smallAnimation}
          className="text-center text-sm ">
          We're thrilled to see that our efforts have not gone unnoticed. We are
          proud to have received numerous glowing testimonials from our
          satisfied clients.
        </SectionDescription>
      </div>
      {/* TESTIMONIALS SLIDER */}
      <TestimonialsSlider />
    </div>
  );
};

export default Testimonials;
