import React from "react";
import Button from "../commons/Button";
const image = "https://vpn1.netlify.app/static/media/about-sec.fd20c60f.png";
import { motion } from "framer-motion";
import { largeAnimation, smallAnimation } from "@/constants/animations";

import img1 from "../../assets/images/heroMountedContainerImages/img1.png";
import img2 from "../../assets/images/heroMountedContainerImages/img2.png";
import img3 from "../../assets/images/heroMountedContainerImages/img3.png";
import img4 from "../../assets/images/heroMountedContainerImages/img4.png";
import img5 from "../../assets/images/heroMountedContainerImages/img5.png";
import img6 from "../../assets/images/heroMountedContainerImages/img6.png";
import Image from "next/image";
import Container from "../commons/Container";
import MountedContainer from "../commons/MountedContainer";
const images = [img1, img2, img3, img4, img5, img6];
const Creative = () => {
  return (
    <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center md:w-full relative lg:pt-[3rem]">
      <Container className="absolute top-[-160px] sm:top-[-200px] left-[50%]  translate-x-[-50%]">
        <MountedContainer className="grid grid-cols-3 gap-[1rem]  xl:grid-cols-6">
          {images.map((image) => (
            <Image src={image} />
          ))}
        </MountedContainer>
      </Container>
      <div className="pt-[1rem] sm:pt-[3rem] pb-[2rem] sm">
        <motion.img
          src={image}
          className="lg:h-full object-contain"
          {...largeAnimation}
        />
      </div>
      <div className="flex flex-col gap-4 md:w-[80%] md:max-w-[600px] mx-auto ">
        <motion.div
          {...smallAnimation}
          className=" text-[#0450FA] font-semibold bg-gray-100 w-[200px] py-3 flex items-center justify-center rounded-md">
          {" "}
          Creative Solutions
        </motion.div>
        <motion.h1
          {...smallAnimation}
          className="text-gray-50 text-[1.5rem] md:text-[2rem] font-semibold">
          We Are The Trusted Experts We Keep Things Simple
        </motion.h1>
        <motion.p {...smallAnimation} className="text-gray-300 text-sm ">
          As the trusted experts in our field, we understand that our customers
          rely on us to provide them with simple and effective solutions. That's
          why we keep things simple, by providing easy-to-use and
          straightforward services that are designed to meet your specific
          needs.
        </motion.p>
        <motion.p {...smallAnimation} className="text-gray-300 text-sm ">
          Our team of experienced professionals is dedicated to providing you
          with the guidance and support you need to achieve your goals, without
          unnecessary complications or confusion. We are always available to
          help you, whether you need assistance selecting the best service,
          setting up your account, or fixing a problem.
        </motion.p>
        <a href="/about">
          <motion.button
            {...smallAnimation}
            className="border border-gray-500 w-[150px] md:w-[170px] text-[#3581f3] font-semibold py-3 md:py-3 rounded-md bg-gray-50 mt-[2rem] text-sm">
            READ MORE
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
};

export default Creative;
