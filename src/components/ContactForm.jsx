import React from "react";
import Button from "./commons/Button";

const ContactForm = () => {
  return (
    <form className=" lg:col-span-3 flex flex-col gap-[2rem] border border-blue-400 px-[1rem] py-[2rem] md:px-[2rem] md:py-[2.5rem] rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] items-center">
        <div className="relative py-[1rem]">
          <input
            type="text"
            id="floating_filled"
            className="block  rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-[2.5px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer "
            placeholder=" "
          />
          <label
            for="floating_filled"
            className=" text-[1.3rem] absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-900 peer-focus:dark:text-gray-900  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8">
            Name
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="floating_filled"
            className="block  rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-[2.5px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer "
            placeholder=" "
          />
          <label
            for="floating_filled"
            className=" text-[1.3rem] absolute   text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] left-2.5 peer-focus:text-gray-900 peer-focus:dark:text-gray-900  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8">
            Email
          </label>
        </div>
      </div>
      <div className="relative">
        <input
          type="text"
          id="floating_filled"
          className="block  rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-[2.5px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer "
          placeholder=" "
        />
        <label
          for="floating_filled"
          className=" text-[1.3rem] absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] left-2.5 peer-focus:text-gray-900 peer-focus:dark:text-gray-900  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8">
          Subject
        </label>
      </div>
      <div className="relative">
        <textarea
          rows={5}
          id="floating_filled"
          className="block  rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-[2.5px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer "
          placeholder=" "
        />
        <label
          for="floating_filled"
          className="text-[1.3rem] absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] left-2.5 top-5 peer-focus:text-gray-900 peer-focus:dark:text-gray-900  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8">
          Message
        </label>
      </div>
      <Button className="uppercase font-semibold text-sm bg-gradient-to-r from-sky-400 to-lime-900 text-gray-100 px-6 py-3 md:py-4 md:px-9 rounded-md max-w-[250px] mx-auto">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
