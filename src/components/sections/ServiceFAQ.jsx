import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

const ServiceFAQ = ({ faqs }) => {
  console.log(faqs);
  return (
    <Accordion
      className=" border border-gray-200 shadow-md rounded-lg"
      transition={{
        duration: "300ms",
        timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      }}>
      {faqs?.map((item) => (
        <AccordionItem>
          {({ open }) => (
            <div>
              <AccordionHeader
                className={`w-full flex justify-between items-start text-gray-600 border-b py-4 md:p-4 ${
                  open && "bg-blue-700 text-gray-100"
                } px-[1rem]`}>
                <span
                  className={`font-[400] text-sm  ${
                    open && "text-gray-100"
                  } transition-all  text-start`}>
                  {item.question}
                </span>
                <svg
                  class={`w-6 h-6 ${!open ? "" : "rotate-90 text-gray-100"}`}
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
                <div className="p-4  bg-gray-100 text-sm text-gray-500">
                  {item.answer}
                </div>
              </AccordionBody>
            </div>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ServiceFAQ;
