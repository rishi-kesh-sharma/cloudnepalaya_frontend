import React from "react";
import Card from "./commons/Card";
import Image1 from "../assets/images/hero-card1.png";
import Image2 from "../assets/images/hero-card3.png";
import Image3 from "../assets/images/hero-card3.png";
import Image from "next/image";
const cardData = [
  {
    image: Image1,
    title: "Email Support",
    description: "info@yourdomain.com",
  },
  {
    image: Image2,
    title: "Phone Number",
    description: "0129-292-1424",
  },
  {
    image: Image3,
    title: "Company Address",
    description: "Suite 1100. Denver, USA, North Cost",
  },
];
const ContactCards = () => {
  return (
    <div className="gap-[2rem] flex flex-col justify-center lg:col-span-2">
      {cardData.map((item) => (
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
          <div className="w-full md:w-7/12  flex-col flex items-start justify-center">
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

export default ContactCards;
