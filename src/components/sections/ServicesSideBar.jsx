import React from "react";
import service from "../../assets/images/service3.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import Image from "next/image";
import { servicesData } from "@/data";
const servicesLink = [
  {
    title: "DevOps Services",
    url: "/service/1",
  },
  {
    title: "Cloud Migration",
    url: "/service/2",
  },
  {
    title: "Software Development ",
    url: "/service/3",
  },
  {
    title: "Cloud Marketing",
    url: "/service/4",
  },
  {
    title: "Cloud Hosting",
    url: "/service/5",
  },
  {
    title: "Quality Analysis",
    url: "/service/6",
  },
  {
    title: "Cloud Support",
    url: "/service/7",
  },
];

const workingHours = [
  "sun-thu 9:00-5:00 pm",
  "friday 9:00 - 1:00pm",
  "saturday closed",
];

const ServicesSideBar = () => {
  return (
    <div className="flex flex-col md:col-span-2 lg:col-span-1 gap-[1.5rem] pt-[2rem] md:pt-0 ">
      <div className="py-[1rem]  bg-gray-100 rounded-lg">
        <h1 className="font-semibold text-[1.4rem] pl-[1rem] bg-gray-100 pb-[0.2rem]">
          All Services
        </h1>

        <ul className=" flex flex-col items-start justify-center gap-[0.5rem]  py-[1rem] px-[1rem]">
          {servicesData.map((item) => {
            return (
              <li className="w-full py-[0.5rem] border-b border-b-gray-300  text-gray-500 last-of-type:border-none">
                <a
                  className="grid grid-cols-4 justify-start  items-center  h-full w-full gap-[2rem] border-none"
                  href={item.url}>
                  <span className="col-span-3">{item.title}</span>{" "}
                  <BsArrowRight className="text-gray-800" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-gray-100 px-[1rem] py-[1rem] rounded-lg">
        <h1 className="font-semibold text-[1.4rem]  bg-gray-100 pb-[0.2rem]">
          Working Hours
        </h1>
        <ul className="flex flex-col gap-[1rem] py-[1rem] ">
          {workingHours.map((item) => {
            return (
              <li className="bg-white py-[1.5rem] px-[1rem] flex gap-[1rem] items-center justify-start text-gray-500">
                <BiTimeFive className="text-gray-600" />
                <span> {item}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative rounded-lg bg-blend-darken after:absolute  after:rounded-lg after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gray-800 after:opacity-50">
        <div>
          <Image src={service} className="h-full w-full rounded-lg" />
        </div>
        <div className="absolute z-[5] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  text-gray-100 ">
          <h1 className=" text-[1rem] lg:text-[1.4rem] md:text-[1.3rem] font-semibold text-center">
            Have any Query
          </h1>
          <a href="/contact" className="block mt-[1rem]">
            <button className=" lg:text-[1.1rem] lg:py-[0.9rem] text-gray-100 bg-blue-700 text-center py-[0.5rem]  px-[0.5rem] lg:px-[1rem] flex gap-[0.2rem] lg:gap-[1rem] md:gap-[0.3rem]  items-center rounded-md mx-auto lg:w-[180px] md:p-[0.5rem]  text-sm 2xl:w-[300px] 2xl:py-[1.4rem] ">
              GET A QUOTE <BsArrowRight />{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesSideBar;
