"use client";
import { getDocuments } from "@/apiCalls/general";
// import { faqData } from "@/data";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

const FAQCards = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getDocuments("faq");
      console.log();
      let generalFAQs = response?.data?.documents?.filter(
        (item) => item.type == "General"
      );
      setDocuments(generalFAQs);
      return response;
    };
    getData();
  }, []);
  return (
    <Accordion
      className="py-[1rem] border border-gray-400 rounded-lg"
      transition={{
        duration: "300ms",
        timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      }}>
      {documents.map((item, index) => (
        <AccordionItem key={index}>
          {({ open }) => (
            <>
              <AccordionHeader className="w-full flex justify-between items-start text-gray-600 border-b px-2 py-3  text-start ">
                <span className="text-gray-900 font-[400]  text-sm">
                  {item?.question}
                </span>
                <svg
                  class={`w-6 h-6 ${!open ? "" : "rotate-90"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </AccordionHeader>

              <AccordionBody>
                <div className="py-3 md:py-5 px-2  text-gray-500  text-sm">
                  {item?.answer}
                </div>
              </AccordionBody>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQCards;
