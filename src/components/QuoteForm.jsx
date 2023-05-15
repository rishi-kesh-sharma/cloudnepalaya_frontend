"use client";
import React, { useEffect, useState } from "react";
import Button from "./commons/Button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { createDocument, getDocuments } from "@/apiCalls/general";

import Swal from "sweetalert2";

export const messageToast = (icon, title) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon || "success",
    title: title || "Task Completed Successfully!!!",
  });
};

const QuoteForm = () => {
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await getDocuments("service");
      setDocuments(response?.data?.documents);
      return response;
    };
    getData();
  }, []);
  const handleSubmit = async (values) => {
    try {
      const response = await createDocument("quote", values);
      messageToast("success", "Quote has been successfully requested!!!");
    } catch (err) {
      messageToast(
        "error",
        `${err.response.message || err.message || "Cannot request quote!!!"}`
      );
    }
  };
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    service: Yup.string().required(),
    message: Yup.string().required(),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      <Form className=" lg:col-span-3 flex flex-col gap-[2rem] border border-blue-400 px-[1rem] py-[2rem] md:px-[2rem] md:py-[2.5rem] rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1rem] items-center">
          <div className="relative py-[1rem]">
            <Field
              type="text"
              id="name"
              name="name"
              className="block  rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-[2.5px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer "
              placeholder=" "
            />
            <ErrorMessage
              name="name"
              className="text-[0.4rem] text-red-500 bg-red-300"
              style={{ background: "red" }}>
              {(msg) => (
                <div className="text-red-500 text-sm mt-[0.3rem] ">{msg}</div>
              )}
            </ErrorMessage>
            <label
              for="name"
              className=" text-[1.3rem] absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-gray-900 peer-focus:dark:text-gray-900  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8">
              Name
            </label>
          </div>
          <div className="relative">
            <Field
              type="text"
              id="email"
              name="email"
              className="block  rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-[2.5px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer "
              placeholder=" "
            />
            <ErrorMessage
              name="email"
              className="text-[0.4rem] text-red-500 bg-red-300"
              style={{ background: "red" }}>
              {(msg) => (
                <div className="text-red-500 text-sm mt-[0.3rem] ">{msg}</div>
              )}
            </ErrorMessage>
            <label
              for="email"
              className=" text-[1.3rem] absolute   text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] left-2.5 peer-focus:text-gray-900 peer-focus:dark:text-gray-900  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8">
              Email
            </label>
          </div>
        </div>
        <div className="relative">
          <Field
            as="select"
            id="service"
            name="service"
            className="block cursor-pointer  rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-[2.5px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer "
            placeholder=" ">
            {documents?.map((item, index) => {
              return (
                <option
                  key={index}
                  value={item?._id}
                  className="cursor-pointer">
                  {item?.title}
                </option>
              );
            })}
          </Field>
          <ErrorMessage
            name="service"
            className="text-[0.4rem] text-red-500 bg-red-300"
            style={{ background: "red" }}>
            {(msg) => (
              <div className="text-red-500 text-sm mt-[0.3rem] ">{msg}</div>
            )}
          </ErrorMessage>
          <label
            for="service"
            className=" text-[1.3rem] absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] left-2.5 peer-focus:text-gray-900 peer-focus:dark:text-gray-900  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8">
            service
          </label>
        </div>
        <div className="relative">
          <Field
            type="number"
            id="mobile"
            name="mobile"
            className="block  rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-[2.5px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer "
            placeholder=" "
          />
          <ErrorMessage
            name="mobile"
            className="text-[0.4rem] text-red-500 bg-red-300"
            style={{ background: "red" }}>
            {(msg) => (
              <div className="text-red-500 text-sm mt-[0.3rem] ">{msg}</div>
            )}
          </ErrorMessage>
          <label
            for="mobile"
            className=" text-[1.3rem] absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] left-2.5 peer-focus:text-gray-900 peer-focus:dark:text-gray-900  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8">
            Mobile
          </label>
        </div>
        <div className="relative">
          <Field
            as="textarea"
            rows={5}
            id="message"
            name="message"
            className="block  rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-[2.5px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#404040] focus:outline-none focus:ring-0 focus:border-[#404040] peer "
            placeholder=" "
          />
          <ErrorMessage
            name="message"
            className="text-[0.4rem] text-red-500 bg-red-300"
            style={{ background: "red" }}>
            {(msg) => (
              <div className="text-red-500 text-sm mt-[0.3rem] ">{msg}</div>
            )}
          </ErrorMessage>
          <label
            for="message"
            className="text-[1.3rem] absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] left-2.5  peer-focus:text-gray-900 peer-focus:dark:text-gray-900  peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-8">
            Message
          </label>
        </div>
        <Button
          type="submit"
          className="uppercase font-semibold text-sm bg-gradient-to-r from-sky-400 to-lime-900 text-gray-100 px-6 py-3 md:py-4 md:px-9 rounded-md max-w-[250px] mx-auto">
          Send Message
        </Button>
      </Form>
    </Formik>
  );
};

export default QuoteForm;
