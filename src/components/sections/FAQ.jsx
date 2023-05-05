import React from "react";
import SectionSubtitle from "../commons/SectionSubtitle";
import SectionDescription from "../commons/SectionDescription";
import SectionTitle from "../commons/SectionTitle";
import FAQCards from "../FAQCards.jsx";
import Image from "next/image";

const FAQ = () => {
  return (
    <div className="flex flex-col gap-[1rem] md:gap-[2rem]">
      <div>
        <SectionTitle className=" text-sm md:text-[1rem] text-center text-blue-600 font-semibold  ml-[1rem] rounded-md bg-blue-100 max-w-[150px] py-[0.3rem] mx-auto">
          FAQ Questions
        </SectionTitle>
        <SectionSubtitle className="text-center text-[1.6rem] md:text-[2rem] ">
          Frequently Asked Questions
        </SectionSubtitle>
        <SectionDescription className="">
          Here are answers to some Frequently Asked Questions.
        </SectionDescription>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] justify-start items-center">
        {/* FAQ SECTION SIDE IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src={"https://vpn1.netlify.app/static/media/about3.09c5ee1c.png"}
            className="w-full"
          />
        </div>

        {/* FAQS CARD */}
        <FAQCards />
      </div>
    </div>
  );
};

export default FAQ;
