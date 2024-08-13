"use client"

import React, { useEffect, useState } from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    const [iconSize, setIconSize] = useState(25);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 768) {
                setIconSize(20)
            } else {
                setIconSize(25)
            }
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [])
  return (
    <div className="font-mono bg-black text-neutral-300 flex flex-row justify-between items-center w-full min-h-20 px-4">
      <div className="md:text-xl text-sm">
        Established {new Date().getFullYear()}{" "}
        <span className="font-bold">JEESUN</span>.
      </div>
      <div className="flex flex-row gap-2 cursor-pointer">
        <a href={process.env.LINKEDIN} target="_blank">
          <FaLinkedin size={iconSize} />
        </a>
        <a href={process.env.GITHUB} target="_blank">
          <FaGithub size={iconSize} />
        </a>
        <a href={process.env.TWITTER} target="_blank">
          <FaXTwitter size={iconSize} />
        </a>
        <a href={process.env.FACEBOOK} target="_blank">
          <FaFacebook size={iconSize} />
        </a>
        <a href={process.env.INSTAGRAM} target="_blank">
          <FaInstagram size={iconSize} />
        </a>
      </div>
    </div>
  );
}

export default Footer