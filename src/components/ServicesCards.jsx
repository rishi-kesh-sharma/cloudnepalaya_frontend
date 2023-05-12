"use client";
import React, { useEffect, useState } from "react";
import Card from "./commons/Card";
import Image from "next/image";
import { servicesData } from "@/data";
import { getDocuments } from "@/apiCalls/general";
import { SERVER_BASE_URL, SERVER_STATIC_URL } from "@/constants/general";
const ServicesCards = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getDocuments("service");
      console.log(response?.data?.documents);
      setDocuments(response?.data?.documents);
      return response;
    };
    getData();
  }, []);
  return (
    <div className="gap-[2rem] md:grid md:grid-cols-2 lg:col-span-2 grid grid-cols-1 justify-center lg:justify-start">
      {documents?.map((item, index) => (
        <a href={`/service/${item?._id}`}>
          <Card className="gap-[0.5rem] hover:shadow-md p-[1rem] hover:cursor-pointer hover:bg-gray-50 rounded-xl">
            <Image
              src={
                document?.image?.filePath || document?.image?.fileName
                  ? `${SERVER_STATIC_URL}${document?.image?.filePath}/${document?.image?.fileName}`
                  : servicesData[0].image
              }
              alt=""
              height={80}
              width={80}
            />
            <h3 className="text-[#467CFB] font-semibold text-lg">
              {item?.title}
            </h3>
            <p className=" text-gray-400 text-sm ">
              {item?.mainText?.length > 250
                ? `${item?.mainText?.slice(0, 250)} ...`
                : item?.mainText}
            </p>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default ServicesCards;
