import React from "react";
import Container from "../commons/Container";
import Section from "../commons/Section";
import BlogSection from "../sections/Blog";
import Banner from "../commons/Banner";
const Blog = ({ blog }) => {
  return (
    <>
      <Banner title="Blog" breadCrumbs={["Home", "Blog"]} />
      <Section className="bg-gray-50">
        <Container className="pt-[2rem] md:pt-[4rem] md:pb-[3rem] pb-[2rem]">
          <BlogSection blog={blog} />
        </Container>
      </Section>
    </>
  );
};

export default Blog;
