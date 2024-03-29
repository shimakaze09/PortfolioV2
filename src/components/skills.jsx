"use client"

import { motion } from 'framer-motion';
import { skillsData } from '@/libs/data';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    }
  })
}

const Skills = ({ isSkillRefInView }) => {
  return (
    <ul className="flex gap-4 flex-wrap">
      {
        skillsData.map((skill, index) => (
          <motion.li className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            animate={isSkillRefInView ? "animate" : {}}
            whileHover={{ scale: 1.1 }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))
      }
    </ul>
  )
}

export default Skills;