"use client";
import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import CostumSlider from "./CustomSlider";

import { TestimonialsData } from "@/data";

const TestimonialsSlider = () => {
  return (
    <div className="">
      {/* CUSTOM SLIDER */}

      <CostumSlider>
        {/* ALL TESTIMONIALS */}
        {TestimonialsData.map((testimonial, index) => (
          <div className="p-5 ">
            {/* TESTIMONIAL CARD */}
            <TestimonialsCard testimonial={testimonial} key={index} />
          </div>
        ))}
      </CostumSlider>
    </div>
  );
};

export default TestimonialsSlider;
