import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-20 backdrop-blur-md gap-2 px-5 sm:justify-between justify-center flex-col-reverse sm:flex-row items-center  rounded-tr-4xl rounded-tl-4xl w-full ">
      <div className="text-neutral-50 cursor-pointer hover:text-neutral-500">
        ©Copyright 2025 DevDhoni-Ai
      </div>
      <div className="img flex gap-2">
        
        <Link target="_blank" href={"https://x.com/DhoniAi"} className="inline-block">
          <FaXTwitter size={24} color="gray" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/devdhoni-ai/"}
          className="inline-block"
        >
          <FaLinkedin size={24} color="#0077B6" />
        </Link>
        <Link target="_blank" href={"https://www.youtube.com/channel/UCLURA5d5DmvU_4q9pp9tyQg"}
          className="inline-block"
        >
          <FaYoutube size={24} color="#FF0000" />
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
