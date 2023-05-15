import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
// import cheerio from "cheerio";
const cheerio = require("cheerio");

import ServiceFAQ from "./ServiceFAQ";
import { getDocument } from "@/apiCalls/general";
import { SERVER_STATIC_URL } from "@/constants/general";
import { servicesData } from "@/data";
const Service = ({ _id }) => {
  const [document, setDocument] = useState({});
  useEffect(() => {
    const getData = async () => {
      const response = await getDocument("service", _id);
      console.log(response?.data?.document);
      setDocument(response?.data?.document);
      console.log(document);
      return response;
    };
    getData();
  }, []);

  console.log(typeof document?.text);
  return (
    <div className="md:col-span-3 lg:col-span-2   flex flex-col gap-[1rem] lg:gap-[2rem]  md:order-2">
      <div className="">
        <img
          width={400}
          height={300}
          className="rounded-lg lg:w-full max-w-[500px] object-contain"
          src={
            document?.image?.filePath || document?.image?.fileName
              ? `${SERVER_STATIC_URL}${document?.image?.filePath}/${document?.image?.fileName}`
              : servicesData[0].image
          }
        />
        <h1 className="font-semibold text-[1.6rem] mt-[1rem]">
          {" "}
          {document?.title}
        </h1>
        <p className="text-sm text-gray-500">{document?.mainText}</p>
      </div>
      <div className="rounded-lg bg-gray-100 grid lg:gap-[2rem] grid-cols-1 lg:grid-cols-2 lg:items-start">
        <div>
          <h1 className="font-semibold text-[1.6rem] mt-[1rem]  px-[1rem] lg:mt-0">
            {" "}
            Service Features
          </h1>
          {/* SERVICE FEATURES */}
          <ul className=" px-[1rem] pb-[1rem]">
            {document?.features?.map((item) => {
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
          More About {document?.title}
        </h1>
        <p className="text-sm text-gray-500 pb-[1rem]">{document?.mainText}</p>

        <p className="text-sm text-gray-500 pb-[1rem]">
          {" "}
          {document?.text && cheerio.load(document?.text).text()}
        </p>

        {/* SERVIC
        E FAQS SECTION */}
        {document?.FAQs?.length > 0 && (
          <div className="xl:pt-[2rem] 2xl:pt-[8rem]">
            <h1 className="text-[1.4rem] font-semibold my-[1rem]">{`${document?.title} FAQs`}</h1>
            <ServiceFAQ faqs={document?.FAQs} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;
