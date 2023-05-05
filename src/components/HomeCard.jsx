import React from "react";
import Card from "./commons/Card";
import Image1 from "../assets/images/hero-card1.png";
import Image2 from "../assets/images/hero-card3.png";
import Image3 from "../assets/images/hero-card3.png";
import Image from "next/image";
const cardData = [
  {
    image: Image1,
    title: "Security",
    description:
      "Security is our first priority. Because we recognize that maintaining the security of your data and systems is essential to the success of your business, we have implemented multiple layers of security to guarantee that your information is always protected.",
  },
  {
    image: Image2,
    title: "24/7 Live Support",
    description:
      "Our 24*7 support services are made to guarantee that our clients get the assistance they require whenever they need it. No matter how big or small your inquiries or problems may be, our team of committed experts is here to help you at any time.",
  },
  {
    image: Image3,
    title: "Stable  Reliable",
    description:
      "We have designed our services to be stable and reliable as a result, allowing you to concentrate on running your business without being concerned about downtime or disruptions",
  },
];
const HomeCards = () => {
  return (
    <div className="flex gap-[1rem]  md:gap-[2rem]  flex-wrap mt-[2rem] max-w-[900px]">
      {cardData.map((item) => (
        <Card className="gap-[0.5rem] max-w-[400px]">
          <Image src={item.image} alt="" height={80} width={80} />
          <h3 className="text-[#467CFB] font-[500] ">{item.title}</h3>
          <p className="text-[1rem] text-gray-400 text-sm ">
            {item.description}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default HomeCards;
