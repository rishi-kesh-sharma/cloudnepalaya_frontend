import BlogCard from "../BlogCard";
import React from "react";
import SectionSubtitle from "../commons/SectionSubtitle";
import SectionDescription from "../commons/SectionDescription";
import SectionTitle from "../commons/SectionTitle";
import PaginatedItems from "../Paginations";
const Blogs = ({ blogs }) => {
  return (
    <div className="flex flex-col gap-[2rem] md:gap-[2rem] bg-gray-50 pb-[8rem]">
      <div>
        <SectionTitle className=" text-sm md:text-[1rem] text-center text-blue-600 font-semibold  ml-[1rem] rounded-md bg-blue-100 max-w-[150px] py-[0.3rem] mx-auto">
          {" "}
          Our Blogs
        </SectionTitle>
        <SectionSubtitle className="text-center text-[1.6rem] md:text-[2rem] ">
          Read Our Blogs
        </SectionSubtitle>
        <SectionDescription className="">
          Insights and Ideas: Explore Our Latest Blogs.
        </SectionDescription>
      </div>
      <div className="flex flex-col items-center justify-center">
        {/* BLOGS PAGINATION */}
        {<PaginatedItems itemsPerPage={3} items={blogs} />}
      </div>
    </div>
  );
};

export default Blogs;
