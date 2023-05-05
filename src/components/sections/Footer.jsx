import React from "react";

import logoImage from "../../assets/images/logo.png";
import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import Image from "next/image";
const footer = {
  logo: logoImage,
  text: "As the trusted experts in our field, we understand that our customers rely on us to provide them with simple and effective solutions. That's why we keep things simple, by providing easy-to-use and straightforward services that are designed to meet your specific needs.",
  socials: [
    {
      icon: <BsFacebook className="text-xl text-blue-500" />,
      url: "facebook.com",
    },
    {
      icon: <BsTwitter className="text-xl text-blue-500" />,
      url: "twitter.com",
    },
    {
      icon: <BsGoogle className="text-xl text-blue-500" />,
      url: "twitter.com",
    },
    {
      icon: <BsInstagram className="text-xl text-blue-500" />,
      url: "instagram.com",
    },
    {
      icon: <BsLinkedin className="text-xl text-blue-500" />,
      url: "linkedin.com",
    },
  ],
  columns: [
    {
      heading: "PRIVACY &amp; TOS",
      links: [
        { name: "Advertiser Agreement", url: "/" },
        { name: "Acceptable Use Policy", url: "/" },
        { name: "Privacy Policy", url: "/" },
        { name: "Technology Privacy ", url: "/" },
        { name: "Developer Agreement ", url: "/" },
      ],
    },
    {
      heading: "Navigate",
      links: [
        { name: "Advertisers", url: "/" },
        { name: "Developers", url: "/" },
        { name: "Resources", url: "/" },
        { name: "Company", url: "/" },
        { name: "Connect", url: "/" },
      ],
    },
    {
      heading: "Contact Us",
      links: [
        { name: "Mailing Addressxx00 E. Union Ave" },
        { name: "Suite 1100. Denver, CO 80237" },
        { name: "+999 90932 627" },
        { name: "support@yourdomain.com" },
      ],
    },
  ],
};
const Footer = () => {
  return (
    <div className="grid grid-cols-1 text-gray-200 gap-[1rem] md:grid-cols-2 lg:grid-cols-4  lg:justify-center text-sm md:text-lg">
      <div className="flex flex-col gap-[1rem]">
        <Image src={footer.logo} />
        <p className="text-sm">{footer.text}</p>
        <ul className="flex gap-[0.5rem]  text-lg">
          {footer.socials.map((social) => (
            <li className="p-[0.4rem] bg-white">
              <a className="" href={social.url}>
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {footer.columns.map((column) => {
        return (
          <div>
            <h2 className="text-lg font-semibold mb-[0.7rem]">
              {column.heading}
            </h2>
            <ul>
              {column.links.map((link) => {
                return (
                  <li className="text-sm">
                    {link.url ? <a href="">{link.name}</a> : link.name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
