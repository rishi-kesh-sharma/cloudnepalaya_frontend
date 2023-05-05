import React from "react";
import Section from "./Section";
import Container from "./Container";

const url = "https://vpn1.netlify.app/static/media/map.1269c3fd.svg";

const bg = "https://vpn1.netlify.app/static/media/sub_bg.c798c4d3.png";
const Banner = ({ title, breadCrumbs }) => {
  return (
    <Section className="pt-[3rem] bg-[url(https://vpn1.netlify.app/static/media/sub_bg.c798c4d3.png)] h-[400px] relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:z-10 after:bg-[url(https://vpn1.netlify.app/static/media/map.1269c3fd.svg)] after:bg-no-repeat after:opacity-[0.2] after:bg-cover">
      <Container className="flex items-center justify-center flex-col h-full gap-[2rem]">
        <h1 className="text-gray-100 text-[2rem] font-semibold">{title}</h1>
        <ul className="flex gap-[1rem]">
          {breadCrumbs.map((breadCrumb) => {
            return <li className="text-gray-50">{breadCrumb}</li>;
          })}
        </ul>
      </Container>
    </Section>
  );
};

export default Banner;
