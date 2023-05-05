import React from "react";
import SectionSubtitle from "../commons/SectionSubtitle";
import SectionDescription from "../commons/SectionDescription";
import SectionTitle from "../commons/SectionTitle";
import ServicesCards from "../ServicesCards";
import { motion } from "framer-motion";
import { smallAnimation } from "@/constants/animations";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[2rem]">
      <div className="">
        <SectionTitle
          $as={motion.h4}
          {...smallAnimation}
          className="text-sm  text-blue-600 font-semibold ml-0  lg:ml-[1rem] rounded-md bg-blue-100 max-w-[150px] py-[0.3rem] md:py-[0.4rem] md:mb-[0.6rem]">
          What We Offer?
        </SectionTitle>
        <SectionSubtitle
          $as={motion.h1}
          {...smallAnimation}
          className="text-start text-[#222] ">
          Our Top Services
        </SectionSubtitle>
        <SectionDescription
          $as={motion.p}
          {...smallAnimation}
          className=" text-start md:mx-0 text-sm ">
          We offer a wide range of cloud services to help businesses of all
          sizes leverage the power of the cloud. Our cloud solutions are
          designed to be scalable, reliable, and secure, with high levels of
          performance and availability. We also offer a range of tools and
          resources to help you manage your cloud services, including monitoring
          and reporting, automation, and support services. With our cloud
          services, you can easily deploy and manage your applications and
          services, while reducing costs and increasing efficiency. Explore our
          services today and see how we can help you transform your business
          with the power of the cloud.
        </SectionDescription>
      </div>
      <ServicesCards />
    </div>
  );
};

export default Services;
