"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

function Items({ currentItems }) {
  return (
    //  BLOGS
    <div className="gap-[2rem] justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-[90%] mx-auto grid items-center  sm:grid-cols-2 md:grid-cols:3 mt-[2rem] ">
      {currentItems &&
        currentItems?.map((item, index) => {
          return (
            // BLOG CARD
            <BlogCard key={item._id} blog={item} aspect="square" />
          );
        })}
    </div>
  );
}

export default function PaginatedItems({ items }) {
  return (
    <>
      <Items currentItems={items} />
    </>
  );
}
