import React from "react";
import Card from "./commons/Card";
import Image from "next/image";
import { featuresData } from "@/data";
const FeaturesCards = () => {
  return (
    <div className="gap-[2rem] flex flex-col justify-center">
      {featuresData.map((item) => (
        <Card className="flex-col md:flex-row gap-[1rem] rounded-md shadow-md bg-blue-50 border border-blue-300 px-[1rem] py-[1rem] md:px-[2rem] md:py-[2rem]">
          <div className="flex justify-start md:items-center md:justify-center lg:justify-start lg:h-full">
            <Image
              src={item.image}
              alt=""
              className="h-[80px] max-w-[80px] md:h-full lg:h-[80px] object-contain  "
              // height={150}
              // width={150}
            />
          </div>
          <div className="w-full md:w-7/12 lg:w-9/12 flex-col flex items-start justify-center">
            <h3 className="text-[#222] font-semibold text-lg">{item.title}</h3>
            <p className=" text-sm md:text-[1rem] text-gray-400">
              {item.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FeaturesCards;
