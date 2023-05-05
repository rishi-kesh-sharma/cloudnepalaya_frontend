import React from "react";
import SectionSubtitle from "../commons/SectionSubtitle";
import SectionDescription from "../commons/SectionDescription";
import SectionTitle from "../commons/SectionTitle";
import PricingCards from "../PricingCards";
import { motion } from "framer-motion";
import { smallAnimation } from "@/constants/animations";

const Pricing = () => {
  return (
    <div>
      <SectionTitle $as={motion.h4} {...smallAnimation} className="font-[400]">
        Pricing Plans
      </SectionTitle>
      <SectionSubtitle $as={motion.h1} {...smallAnimation}>
        Our Pricing Plans
      </SectionSubtitle>
      <SectionDescription $as={motion.p} {...smallAnimation}>
        We offer flexible and affordable pricing plans to meet the needs of
        businesses of all sizes. Our plans are designed to provide you with the
        features and resources you need to run your applications and services in
        the cloud.
      </SectionDescription>
      <PricingCards />
    </div>
  );
};

export default Pricing;
