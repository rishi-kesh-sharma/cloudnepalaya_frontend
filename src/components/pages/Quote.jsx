import React from "react";
import Container from "../commons/Container";
import Section from "../commons/Section";

import QuoteSection from "../sections/Quote";
import Banner from "../commons/Banner";
const Quote = () => {
  return (
    <>
      <Banner title="Quote" breadCrumbs={["Home", "Quote"]} />
      <Section className="bg-gray-50">
        <Container className="pt-[2rem]  md:pt-[4rem]  pb-[9rem]">
          <QuoteSection />
        </Container>
      </Section>
    </>
  );
};

export default Quote;
