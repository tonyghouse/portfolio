'use client'
import React, { useContext } from "react";
import {FaGithub,FaLinkedin,FaTwitter ,FaEnvelope} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import HeroAnimo from "./hero-animo";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className=" flex flex-row justify-start w-full h-full below-md:h-[75vh] gap-2 mt-1 section-padding section-margin">
        <div className="flex flex-col justify-center w-full  below-md:w-[55%] ">
          <div className="flex flex-row items-center justify-start ">
            <h1 className="inline-block slate mb-2 mt-6 md:mt-8 py-1 text-4xl font-[600] 
            md:py-2 md:text-[2.3rem] md:leading-[2.7rem] lg:text-[2.7rem] lg:leading-[3rem] font-poppins ">
             Tony Ghouse
            </h1>
          </div>

          <h2
            className="slate py-1 mb-1 text-[1.6rem] font-[600] leading-normal tracking-tight opacity-60
                          md:py-2 md:text-[1.7rem]  lg:text-[2rem] font-poppins "
          >
            Software Developer
          </h2>
          <br />
          <p className=" slate lg:text-text-[1.6rem] max-w-[50rem] text-[0.9rem] leading-normal opacity-90  md:text-[1.2rem] font-inter ">
            I’m a developer and computer science grad specialized in backend
            development and building software with exceptional performance and
            scalabilty. Currently, I’m focused on building skills, projects and
            contributing to opensource softwares.
          </p>

          <div className="flex w-full py-4 pr-2 my-2 cursor-pointer font-monospace md:my-4 md:w-fit md:pr-4 ">
            <Link
              href="https://github.com/tonyghouse"
              target="_blank"
              rel="noreferrer"
              className="slate inline py-2 pr-6 text-[1.6rem] font-[400] opacity-60 md:pr-8 md:text-[2rem]"
            >
              <FaGithub/>
            </Link>
            <Link
              href="https://www.linkedin.com/in/tonyghouse/"
              target="_blank"
              rel="noreferrer"
              className="slate inline py-2 pr-6 text-[1.6rem] font-[400] opacity-60 md:pr-8 md:text-[2rem]"
            >
              <FaLinkedin/>
            </Link>
            <Link
              href="https://twitter.com/tonyghouse"
              target="_blank"
              rel="noreferrer"
              className="slate inline py-2 pr-6 text-[1.6rem] font-[400] opacity-60 md:pr-8 md:text-[2rem]"
            >
             <FaTwitter/>
            </Link>
            <Link
              href="https://leetcode.com/tonyghouse/"
              target="_blank"
              rel="noreferrer"
              className="slate inline py-2 pr-6 text-[1.6rem] font-[400] opacity-60 md:pr-8 md:text-[2rem]"
            >
              <SiLeetcode/>
            </Link>

            <Link
              href="mailto:tonyghouseofficial@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="slate inline py-2 pr-6 text-[1.6rem] font-[400] opacity-60 md:pr-8 md:text-[2rem]"
            >
              <FaEnvelope/>
            </Link>
          </div>
        </div>
        <div className="hidden below-md:flex below-md:flex-col below-md:h-[90%]  below-md:w-[45%] justify-center py-4 ">
          <HeroAnimo/>
        </div>
      </div>
    </>
  );
}

export default Hero;
