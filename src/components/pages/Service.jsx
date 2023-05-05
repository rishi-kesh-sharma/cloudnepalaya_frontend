import React from "react";
import Container from "../commons/Container";
import Section from "../commons/Section";
import ServiceSection from "../sections/Service";
import Banner from "../commons/Banner";
import ServicesSideBar from "../sections/ServicesSideBar";
const Service = ({ service }) => {
  return (
    <>
      {/* BANNER  */}
      <Banner title="Service" breadCrumbs={["Home", "Service"]} />

      {/* SERVICES SECTION */}
      <Section className="bg-gray-50 pb-[10rem]">
        <Container className="pt-[2rem] md:pt-[4rem] md:pb-[3rem] grid grid-cols-1   md:grid-cols-5 lg:grid-cols-3 gap-[1rem] md:gap-[3rem] ">
          {/* SERVICE */}
          <ServiceSection service={service} />

          {/* SIDEBAR */}
          <ServicesSideBar />
        </Container>
      </Section>
    </>
  );
};
export default Service;
