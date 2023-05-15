"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { getDocuments } from "@/apiCalls/general";

export default function PaginatedItems() {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getDocuments("blog");
      console.log(response?.data?.documents);
      setDocuments(response?.data?.documents);
      return response;
    };
    getData();
  }, []);
  // return <>{/* <Items documents={documents} /> */}</>;
  return (
    <div className="gap-[2rem] justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-[90%] mx-auto grid items-center  sm:grid-cols-2 md:grid-cols:3 mt-[2rem] ">
      {documents?.map((item, index) => {
        return (
          // BLOG CARD
          <BlogCard key={item?._id} blog={item} aspect="square" />
        );
      })}
    </div>
  );
}
