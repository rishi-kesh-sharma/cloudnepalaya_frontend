import React from "react";
import Container from "../commons/Container";
import Section from "../commons/Section";

import FAQSection from "../sections/FAQ";
import Testimonials from "../sections/Testimonials";
import Banner from "../commons/Banner";
const FAQ = () => {
  return (
    <>
      {/* BANNER */}
      <Banner title="FAQ" breadCrumbs={["Home", "FAQ"]} />

      {/* FAQ SECTION */}
      <Section className="bg-gray-50">
        <Container className="pt-[2rem] md:pt-[4rem] md:pb-[3rem] pb-[2rem]">
          <FAQSection />
        </Container>
      </Section>

      {/* TESTIMONIALS SECTION */}
      <Section className="bg-gray-50">
        <Container className="md:pt-[2rem] pb-[10rem] lg:pt-[3rem] lg:pb-[10rem]">
          <Testimonials />
        </Container>
      </Section>
    </>
  );
};

export default FAQ;
