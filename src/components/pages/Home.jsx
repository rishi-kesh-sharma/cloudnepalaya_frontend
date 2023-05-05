import React from "react";
import Container from "../commons/Container";
import Hero from "../sections/Hero";
import Section from "../commons/Section";
import MountedContainer from "../commons/MountedContainer";

import Creative from "../sections/Creative";
import Pricing from "../sections/Pricing";
import Services from "../sections/Services";
import Growth from "../sections/Growth";
import Features from "../sections/Features";
import Testimonials from "../sections/Testimonials";
import Footer from "../sections/Footer";
const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Section className="bg-[url(https://vpn1.netlify.app/static/media/ai5.ccb17da7.png)]  bg-no-repeat bg-cover pb-[4rem] lg:pb-[12rem]  ">
        <Container className="pt-[3rem] relative">
          <Hero />
        </Container>
      </Section>

      {/* CREATIVE SOLUTION SECTION */}
      <Section className="bg-[linear-gradient(182deg,#469eff,#2f69ff)] ">
        <Container className="pt-[6rem] pb-[5rem]">
          <Creative />
        </Container>
      </Section>

      {/* PRICING SECTION */}
      <Section className="bg-[#EEF5FF]">
        <Container className="pt-[3rem] md:pt-[4rem] lg:pt-[6rem] lg:pb-[5rem]">
          <Pricing />
        </Container>
      </Section>

      {/* SERVICES SECTION */}
      <Section className="bg-gray-50">
        <Container className="pt-[2rem] md:pt-[4rem] md:pb-[3rem] pb-[2rem]">
          <Services />
        </Container>
      </Section>

      {/* GROWTH SECTION */}
      <Section className="bg-[linear-gradient(182deg,#469eff,#2f69ff)] ">
        <Container className="pt-[6rem] pb-[5rem]">
          <Growth />
        </Container>
      </Section>

      {/* FEATURES SECTION */}
      <Section className="bg-gray-50">
        <Container className="pt-[6rem] pb-[5rem] md:pb-[2rem] lg:pb-0">
          <Features />
        </Container>
      </Section>

      {/* TESTIMONIALS SECTION */}
      <Section className="bg-gray-50 pb-[5rem]">
        <Container className="md:pt-[2rem] pb-[4rem] lg:pt-[6rem] lg:pb-[5rem]">
          <Testimonials />
        </Container>
      </Section>
    </>
  );
};

export default Home;
