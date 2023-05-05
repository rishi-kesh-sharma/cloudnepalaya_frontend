import React from "react";
import Container from "../commons/Container";
import Hero from "../sections/Hero";
import Section from "../commons/Section";
import MountedContainer from "../commons/MountedContainer";

import ContactSection from "../sections/Contact";
import Banner from "../commons/Banner";
const Contact = () => {
  return (
    <>
      <Banner title="Contact" breadCrumbs={["Home", "Contact"]} />
      <Section className="bg-gray-50">
        <Container className="pt-[2rem] md:pt-[4rem] md:pb-[3rem] pb-[2rem]">
          <ContactSection />
        </Container>
      </Section>
    </>
  );
};

export default Contact;
