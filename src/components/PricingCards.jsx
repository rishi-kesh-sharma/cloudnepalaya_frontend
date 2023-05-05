import React from "react";
import Card from "./commons/Card";
import Button from "./commons/Button";
import { largeAnimation } from "@/constants/animations";
import { motion } from "framer-motion";
let alter;

import { pricingData } from "@/data";
const PricingCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[2.6rem] py-[4rem]  justify-center md:justify-start ">
      {pricingData.map((item, index) => {
        alter = (index + 1) % 2 == 0;
        return (
          <Card
            $as={motion.div}
            {...largeAnimation}
            className={`${
              alter
                ? "bg-[linear-gradient(182deg,#469eff,#2f69ff)]"
                : "bg-white"
            }  justify-center   rounded-lg items-center gap-[1rem]  py-[3rem]  relative shadow-md cursor-pointer `}>
            <div
              className={`${alter ? "text-[#5BA5FB]" : "text-gray-50"} ${
                alter ? "bg-gray-50" : "bg-[#5BA5FB]"
              } absolute top-0 right-0 rounded-tr-lg px-[0.5rem]  py-[0.5rem] rounded-bl-lg font-semibold text-sm`}>
              {item.discount}% off
            </div>
            <h3
              className={`${
                alter ? "text-gray-100" : "text-gray-400"
              } font-[500]`}>
              {item.title}
            </h3>
            <img src={item.image} height={150} width={150} />
            {/* <div className="flex flex-col items-center">
              <h1
                className={`${
                  alter ? "text-gray-100" : "text-[#3964F9]"
                } font-bold text-[2rem] `}>
                ${item.price}
              </h1>
              <p
                className={`${
                  alter ? "text-gray-100" : "text-gray-400"
                } text-sm `}>
                {item.frequency}
              </p>
            </div> */}
            <ul className="flex flex-col gap-[0.6rem] items-center">
              {item.features.map((feature) => (
                <p
                  className={` text-sm ${
                    alter ? "text-gray-100" : "text-gray-400"
                  } `}>
                  {feature}
                </p>
              ))}
            </ul>
            <a href="/contact">
              <Button
                className={`uppercase font-semibold text-sm  py-3 px-5  md:py-4 md:px-9 rounded-md ${
                  alter
                    ? "bg-gray-100 text-blue-800"
                    : "bg-gradient-to-r from-sky-400 to-lime-900 text-gray-100"
                }`}>
                Get Quote
              </Button>
            </a>
          </Card>
        );
      })}
    </div>
  );
};

export default PricingCards;
