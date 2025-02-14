"use client";

import Link from 'next/link';
import React from 'react';
// import { Github, Linkedin, Dribbble } from 'lucide-react';
import { FaGithub, FaLinkedin,FaDribbble } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="border-grid border-t mt-3 md:px-8 sticky bottom-0 left-0 max-w-full w-full h-[100] bg-white">
      <div className="container py-4">
        <div className="text-center text-sm text-muted-foreground mt-2">
          &copy; 2021 Samir Ibrahim. 
        </div>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="https://github.com/samir76/">
          <FaGithub color="gray" size={18} />
          </Link>
          
          <Link href="https://www.linkedin.com/in/samir-ibrahim-293855214/">
          <FaLinkedin color="gray" size={18} />
          </Link>
          <Link href="https://dribbble.com/SamirIbrahim">
          <FaDribbble color="gray" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}