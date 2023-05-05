import React from "react";
import Card from "./commons/Card";

import Image from "next/image";
import { servicesData } from "@/data";
const ServicesCards = () => {
  return (
    <div className="gap-[2rem] md:grid md:grid-cols-2 lg:col-span-2 grid grid-cols-1 justify-center lg:justify-start">
      {servicesData.map((item) => (
        <a href={`/service/${item?.id}`}>
          <Card className="gap-[0.5rem] hover:shadow-md p-[1rem] hover:cursor-pointer hover:bg-gray-50 rounded-xl">
            <Image src={item.image} alt="" height={80} width={80} />
            <h3 className="text-[#467CFB] font-semibold text-lg">
              {item.title}
            </h3>
            <p className=" text-gray-400 text-sm ">
              {item.mainDescription.length > 250
                ? `${item.mainDescription.slice(0, 250)} ...`
                : item.mainDescription}
            </p>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default ServicesCards;
