import React from "react";

import { footer } from "@/data";
import Image from "next/image";
const Footer = () => {
  return (

    <div className="grid grid-cols-1 text-gray-200 gap-[1rem] md:grid-cols-2 lg:grid-cols-5  lg:justify-center lg:justify-items-center text-sm md:text-lg">
      <div className="flex flex-col gap-[1rem] col-span-2">

        <Image src={footer.logo} />
        <p className="text-sm">{footer.text}</p>
        <ul className="flex   text-lg">
          {footer.socials.map((social, index) => (
            <li key={index} className="p-[0.4rem] bg-white">
              <a className="" href={social.url}>
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {footer.columns.map((column, index) => {
        return (
          <div key={index}>
            <h2 className="text-lg font-semibold mb-[0.7rem]">
              {column.heading}
            </h2>
            <ul>
              {column.links.map((link, index) => {
                return (
                  <li className="text-sm" key={index}>
                    {link.url ? <a href="">{link.name}</a> : link.name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}

      <div className=" text-sm mt-[1rem] col-span-3  items-start justify-self-start">

        Copyright © 2019 All Rights Reserved by App Technologies
      
    </div>
  );
};

export default Footer;
