"use client"

import { motion } from "framer-motion";
import Shapes from "@/components/shapes";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Shapes />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">Creative Craftsmanship in Code and Canvas</h1>
          {/* DESC */}
          <p className="">
            Welcome to my portfolio, a space where I share my journey in the world of game development and 3D artistry. Here, you will find a collection of projects that reflect my exploration and learning in C/C++, Unity, Blender, and full-stack development.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio" className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-transparent hover:text-black transition-colors duration-300">
              View My Work
            </Link>
            <Link href="/contact" className="p-4 rounded-lg ring-1 ring-black hover:text-white hover:bg-black transition-colors duration-300">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div >
  );
};

export default Homepage;
