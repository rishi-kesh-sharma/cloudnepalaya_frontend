"use client";

import Header from "@/components/sections/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/sections/Footer";
import PageWrapper from "@/components/commons/PageWrapper";
import Section from "@/components/commons/Section";
import Container from "@/components/commons/Container";
const inter = Inter({ subsets: ["latin"] });

import { Poppins } from "next/font/google";
import { createContext, useEffect, useState } from "react";
import MountedContainer from "@/components/commons/MountedContainer";
import Button from "@/components/commons/Button";
import SecondaryHeader from "@/components/sections/SecondaryHeader";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const NavCtx = createContext();

export default function RootLayout({ children }) {
  // state to identify whether to keep bg transparent for header
  const [transparent, setTransparent] = useState(true);
  // let window = {};
  // scroll event listener
  useEffect(() => {
    addEventListener("scroll", (e) => {
      if (Number(typeof window !== "undefined" && window?.scrollY) > 50) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <style jsx global>{`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}</style>

        {/* dynamic title */}
        <title>
          {(typeof window !== "undefined" &&
            window?.location?.pathname.split("/")[1].toUpperCase()) ||
            "Home"}
        </title>
      </head>
      <body className={inter.className}>
        <NavCtx.Provider
          value={{
            transparent: transparent,
          }}>
          <PageWrapper>
            {/* <Header /> */}
            {typeof window !== "undefined" &&
            window?.location?.pathname == "/" ? (
              <Header />
            ) : (
              <SecondaryHeader />
            )}
            {children}
            <Section className="bg-[#2681EB] relative">
              {typeof window !== "undefined" &&
                window?.location?.pathname != "/contact" && (
                  <Container className="absolute top-[-160px] sm:top-[-200px] left-[50%]  translate-x-[-50%]">
                    <MountedContainer className="flex flex-col md:flex-row gap-[1rem] sm top-[50px] sm:top-[100px] md:justify-between lg:justify-around max-w-[1200px] mx-auto">
                      <div className="">
                        <h2 className="text-[#5ba5fb] font-[500] text-lg  lg:text-[1.5rem]">
                          So What is Next
                        </h2>
                        <h1 className="text-[#13287e] text-xl lg:text-[1.8rem] font-[600] ">
                          Are You Ready? Let&apos;S Work
                        </h1>
                      </div>
                      <a href="/contact">
                        <Button className="max-w-[170px] xl:max-w-[200px] uppercase font-semibold text-sm bg-gradient-to-r from-sky-400 to-lime-900 text-gray-100 py-4 px-6  rounded-md">
                          {typeof window !== "undefined" &&
                          window?.location?.pathname == "/services"
                            ? " Request  Quote"
                            : " Contact Us"}
                        </Button>
                      </a>
                    </MountedContainer>
                  </Container>
                )}
              <Container className=" pt-[8rem] xl:pt-[10rem] pb-[2rem] lg:pt-[6rem] lg:pb-[5rem] ">
                <Footer />
              </Container>
            </Section>
          </PageWrapper>
        </NavCtx.Provider>
      </body>
    </html>
  );
}
