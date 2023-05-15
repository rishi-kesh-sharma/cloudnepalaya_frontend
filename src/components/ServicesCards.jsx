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
      {documents?.map((document, index) => (
        <a href={`/service/${document?._id}`} key={index}>
          <Card className="gap-[0.5rem] hover:shadow-md p-[1rem] hover:cursor-pointer hover:bg-gray-50 rounded-xl">
            <Image
              src={
                document?.image?.filePath && document?.image?.fileName
                  ? `${SERVER_STATIC_URL}${document?.image?.filePath}/${document?.image?.fileName}`
                  : servicesData[index].image.src
              }
              alt=""
              height={130}
              width={130}
            />
            <h3 className="text-[#467CFB] font-semibold text-lg">
              {document?.title}
            </h3>
            <p className=" text-gray-400 text-sm ">
              {document?.mainText?.length > 250
                ? `${document?.mainText?.slice(0, 250)} ...`
                : document?.mainText}
            </p>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default ServicesCards;
