"use client"

import Brain from "@/components/brain";
import Scroll from "@/components/scroll";
import Signature from "@/components/signature";
import Skills from "@/components/skills";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from 'react';

const AboutPage = () => {

  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef })

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef)

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef)

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-y-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 zl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              I have embarked on a journey of self-discovery and learning, diving into the world of game development with a keen interest in C/C++ and Unity. My passion for creating and problem-solving is evident in my game demos and full-stack projects, where I have applied my technical skills to bring ideas to life. Beyond the digital realm, I have also explored the physical dimensions of my creativity, crafting 3D models in Blender. This journey has been a testament to my growth, as I have learned to balance my technical expertise with my creative instincts, all while staying true to my love for technology and game development.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">Each step forward, is a testament to the boundless potential within us all.</span>
            {/* BIOGRAPHY SIGN SVG*/}
            <Signature />
            {/* BIOGRAPHY SCROLL SVG */}
            <Scroll />
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1 initial={{ x: "-500px" }} animate={isSkillRefInView ? { x: 0 } : {}} className="font-bold text-2xl">SKILLS</motion.h1>
            {/* SKILL LIST */}
            <Skills isSkillRefInView={isSkillRefInView} />
            {/* SKILL SCROLL SVG */}
            <Scroll />
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* EXPERIENCE TITLE */}
            <motion.h1 initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: 0 } : {}} className="font-bold text-2xl">EXPERIENCE</motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/2">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Server operator</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I served as a server operator for one year and expanded my skill set by self-teaching in various IT fields, including software development, front-end, and back-end technologies.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2019 - 2020</div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Jin Pin Hui, Beijing, China</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2"></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/2"></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg">PC technician</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I served as a PC technician for one year at DTC, focusing on repairing, modifying, and installing computer software, hardware, and peripheral devices, while also providing technical training and assistance to system users.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2020 - 2022</div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">DTC System, Auckland, NZ</div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/2">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">PC assembly technician</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I worked as a PC assembly technician for half a year at PB Tech. I was responsible for assembling and testing computer hardware, software, and peripheral devices.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2022 - 2023</div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">PB Tech, Auckland, NZ</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/2"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div >
  )
}

export default AboutPage;