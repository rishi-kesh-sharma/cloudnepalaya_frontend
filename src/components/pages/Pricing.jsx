import React from "react";
import Container from "../commons/Container";
import Hero from "../sections/Hero";
import Section from "../commons/Section";
import MountedContainer from "../commons/MountedContainer";

import img1 from "../../assets/images/heroMountedContainerImages/img1.png";
import img2 from "../../assets/images/heroMountedContainerImages/img2.png";
import img3 from "../../assets/images/heroMountedContainerImages/img3.png";
import img4 from "../../assets/images/heroMountedContainerImages/img4.png";
import img5 from "../../assets/images/heroMountedContainerImages/img5.png";
import img6 from "../../assets/images/heroMountedContainerImages/img6.png";
import PricingSection from "../../../Pricing";
import Growth from "../sections/Growth";
import Testimonials from "../sections/Testimonials";
import Banner from "../commons/Banner";
const images = [img1, img2, img3, img4, img5, img6];
const Pricing = () => {
  return (
    <>
      <Banner title="Pricing" breadCrumbs={["Home", "Pricing"]} />
      <Section className="bg-[#EEF5FF]">
        <Container className="pt-[3rem] md:pt-[2rem] lg:pt-[3rem] lg:pb-[1rem]">
          <PricingSection />
        </Container>
      </Section>

      <Section className="bg-gray-50 pt-[2rem] lg:pt-0">
        <Container className="md:pt-[2rem] pb-[10rem] lg:pt-[4rem] lg:pb-[10rem]">
          <Testimonials />
        </Container>
      </Section>
    </>
  );
};

export default Pricing;
