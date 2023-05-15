"use client";
import React, { useEffect, useState } from "react";
import TestimonialsCard from "./TestimonialsCard";
import CostumSlider from "./CustomSlider";

import { TestimonialsData } from "@/data";
import { getDocuments } from "@/apiCalls/general";

const TestimonialsSlider = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getDocuments("testimonial");
      console.log(response?.data?.documents);
      setDocuments(response?.data?.documents);
      return response;
    };
    getData();
  }, []);
  return (
    <div className="">
      {/* CUSTOM SLIDER */}

      <CostumSlider>
        {/* ALL TESTIMONIALS */}
        {documents.map((testimonial, index) => {
          testimonial = {
            image: TestimonialsData[0].image,
            ...TestimonialsData[index],
            ...testimonial,
          };
          return (
            <div key={index} className="p-5 ">
              <TestimonialsCard testimonial={testimonial} key={index} />
            </div>
          );
        })}
      </CostumSlider>
    </div>
  );
};

export default TestimonialsSlider;
