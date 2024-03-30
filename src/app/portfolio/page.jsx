"use client";

import Scroll from "@/components/scroll";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const projectsData = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Tactics RPG",
    description:
      "This is a Tactics RPG game demo that I've developed using Unity. This project marks my first foray into creating a game demo, and it's a testament to my ongoing learning journey in game development.",
    image: "/TacticsRPG.gif",
    link: "https://github.com/shimakaze09/TacticsRPG"
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "D20 RPG",
    description:
      "This is a game demo developed using Unity, which showcases my journey in game development. This project is a reflection of my ongoing learning and experimentation with Unity, a powerful tool that has allowed me to create engaging game demos.",
    image: "/D20.gif",
    link: "https://github.com/shimakaze09/D20"
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Card Game",
    description:
      "This is a captivating card game developed in Unity, showcasing my proficiency in game development and my ability to create engaging and immersive experiences. This game is a blend of strategy, skill, and a touch of fantasy, where players engage in epic duels to outwit their opponents and claim victory.",
    image: "/CardGame.gif",
    link: "https://github.com/shimakaze09/CardGame"
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Sparrow Engine",
    description:
      "This is a project that represents my ongoing exploration into the realm of game engine development. It's a testament to my ongoing learning journey in C++ and my dedication to creating immersive gaming experiences. This project is not just a game engine; it's a reflection of my efforts to tackle complex programming challenges and my passion for game development.",
    image: "/SparrowEngine.gif",
    link: "https://github.com/shimakaze09/SparrowEngine"
  },
]

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
          <div className="fixed bottom-40 left-0 right-0 flex justify-center mb-4">
            <Scroll />
          </div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {projectsData.map((project) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color}`}
                key={project.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {project.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image unoptimized src={project.image} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {project.description}
                  </p>
                  <Link href={project.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">Source Code</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Discover the Magic</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Software and game developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Spark a Conversation
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;