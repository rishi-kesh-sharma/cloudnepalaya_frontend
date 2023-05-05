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
import Image from "next/image";
import Creative from "../sections/Creative";
import Pricing from "../sections/Pricing";
import Services from "../sections/Services";
import Growth from "../sections/Growth";
import Features from "../sections/Features";
import Testimonials from "../sections/Testimonials";
import Footer from "../sections/Footer";
import Banner from "../commons/Banner";
const images = [img1, img2, img3, img4, img5, img6];
const About = () => {
  return (
    <>
      <Banner title="About Us" breadCrumbs={["Home", "About Us"]} />

      {/* FEATURES SECTION */}
      <Section className="bg-[linear-gradient(182deg,#469eff,#2f69ff)] ">
        <Section className="bg-gray-50 pb-[3rem] md:pb-[5rem]">
          <Container className="pt-[3rem] lg:pt-[4rem] pb-[5rem]">
            <Features />
          </Container>
        </Section>

        {/* CREATIVE SECTION */}
        <Container className="pt-[6rem] pb-[5rem] ">
          <Creative />
        </Container>
      </Section>

      {/* TESTIMONIALS SECTION */}
      <Section className="bg-gray-50 pb-[5rem] pt-[2rem] lg:pt-0">
        <Container className="md:pt-[2rem] pb-[4rem] lg:pt-[6rem] lg:pb-[5rem]">
          <Testimonials />
        </Container>
      </Section>
    </>
  );
};

export default About;
