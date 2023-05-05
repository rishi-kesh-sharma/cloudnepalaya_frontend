"use client";
import React from "react";
import Container from "../commons/Container";
import Section from "../commons/Section";

import BlogsSection from "../sections/Blogs";
import Banner from "../commons/Banner";
const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <>
      {/* BANNER */}
      <Banner title="Blogs" breadCrumbs={["Home", "Blogs"]} />

      {/* BLOGS SECTION */}
      <Section className="bg-gray-50">
        <Container className="pt-[2rem] md:pt-[4rem] md:pb-[3rem] pb-[2rem]">
          <BlogsSection blogs={blogs} />
        </Container>
      </Section>
    </>
  );
};

export default Blogs;
