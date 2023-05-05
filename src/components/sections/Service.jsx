import Image from "next/image";
import React from "react";
import mainServiceImage1 from "../../assets/images/service.jpg";
import mainServiceImage2 from "../../assets/images/service2.jpg";
import mainServiceImage3 from "../../assets/images/service3.jpg";
import { AiFillCheckCircle } from "react-icons/ai";
const serviceFeatures = [
  "We provide Flexible IT Services",
  "Best IT  Solution with Our Team",
  "Award Winning Digital Solutions",
  "25 years Skilled Experience",
  "25 years Skilled Experience",
  "25 years Skilled Experience",
];
import ServiceFAQ from "./ServiceFAQ";
const Service = ({ service }) => {
  const features = service?.features || serviceFeatures;

  return (
    <div className="md:col-span-3 lg:col-span-2   flex flex-col gap-[1rem] lg:gap-[2rem]  md:order-2">
      <div className="">
        <Image className="rounded-lg lg:w-full" src={mainServiceImage1} />
        <h1 className="font-semibold text-[1.6rem] mt-[1rem]">
          {" "}
          {service?.title}
        </h1>
        <p className="text-sm text-gray-500">{service?.mainDescription}</p>
      </div>
      <div className="rounded-lg bg-gray-100 grid lg:gap-[2rem] grid-cols-1 lg:grid-cols-2 lg:items-start">
        <Image src={mainServiceImage2} className="rounded-lg lg:w-full" />
        <div>
          <h1 className="font-semibold text-[1.6rem] mt-[1rem]  px-[1rem] lg:mt-0">
            {" "}
            Service Features
          </h1>

          {/* SERVICE FEATURES */}
          <ul className=" px-[1rem] pb-[1rem]">
            {features.map((item) => {
              return (
                <li className="flex items-center gap-2 text-sm text-gray-500">
                  <AiFillCheckCircle className="text-gray-600 " />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="">
        <h1 className="font-semibold text-[1.6rem] mt-[1rem]">
          {" "}
          More About {service?.title}
        </h1>
        {service?.subDescriptions?.map((item) => {
          {
            return <p className="text-sm text-gray-500 pb-[1rem]">{item}</p>;
          }
        })}

        <div className="grid  grid-cols-1 my-[1rem] md:mt-0 md:grid-cols-2 items-center justify-start gap-[1rem] object-contain w-full md:h-[200px] ">
          <Image className="rounded-lg" src={mainServiceImage1} />
          <Image
            className="object-contain     rounded-lg"
            src={mainServiceImage3}
          />
        </div>

        {/* SERVICE FAQS SECTION */}
        <div className="xl:pt-[2rem] 2xl:pt-[8rem]">
          <ServiceFAQ faqs={service?.faqs} />
        </div>
      </div>
    </div>
  );
};

export default Service;
