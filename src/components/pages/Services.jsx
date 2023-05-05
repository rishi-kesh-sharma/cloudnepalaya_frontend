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
import ServicesSection from "../sections/Services";
import Growth from "../sections/Growth";
import Testimonials from "../sections/Testimonials";
import Banner from "../commons/Banner";
const images = [img1, img2, img3, img4, img5, img6];
const Services = () => {
  return (
    <>
      {/* BANNER */}
      <Banner title="Services" breadCrumbs={["Home", "Services"]} />

      {/* SERVICES SECTION */}
      <Section className="bg-gray-50">
        <Container className="pt-[2rem] md:pt-[4rem] md:pb-[3rem] pb-[2rem]">
          <ServicesSection />
        </Container>
      </Section>

      {/* GROWTH SECTION */}
      <Section className="bg-[linear-gradient(182deg,#469eff,#2f69ff)] ">
        <Container className="pt-[6rem] pb-[5rem]">
          <Growth />
        </Container>
      </Section>

      {/* TESTIMONIALS SECTION */}
      <Section className="bg-gray-50 pt-[3rem] lg:pt-0">
        <Container className="md:pt-[2rem] pb-[10rem] lg:pt-[6rem] lg:pb-[10rem] ">
          <Testimonials />
        </Container>
      </Section>
    </>
  );
};

export default Services;
