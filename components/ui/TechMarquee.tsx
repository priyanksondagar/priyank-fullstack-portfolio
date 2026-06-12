'use client'

import { motion } from 'framer-motion'
import { FaReact, FaAws, FaDocker, FaNode, FaGitAlt } from 'react-icons/fa'
import {
    SiNextdotjs,
    SiNestjs,
    SiOpenai,
    SiLangchain,
    SiMongodb,
    SiPostgresql,
    SiContentful,
    SiTypescript,
    SiJavascript,
    SiGraphql,
} from 'react-icons/si'
import { DiRedis } from "react-icons/di";


const technologies = [
    <SiTypescript className='text-blue-400' size={24} />,
    <SiJavascript className='text-yellow-400' size={24} />,
    <FaReact className="text-cyan-400" size={24} />,
    <SiNextdotjs className="text-white" size={24} />,
    <FaNode className='text-green-300' size={24} />,
    <SiNestjs className="text-red-500" size={24} />,
    <SiMongodb className='text-green-500' size={24} />,
    <SiPostgresql className='text-blue-400' size={24} />,
    <FaAws className="text-yellow-400" size={24} />,
    <SiOpenai className="text-green-400" size={24} />,
    <FaDocker className="text-blue-400" size={24} />,
    <SiGraphql className='text-pink-500' size={24} />,
    <SiContentful className='text-yellow-400' size={24} />,
    <DiRedis className='text-red-500' size={24} />,
    <FaGitAlt className='text-orange-700' size={24} />,
    <SiLangchain className="text-violet-400" size={24} />,
]

export default function TechMarquee() {
    return (
        <div
            className="
    relative
    w-full
    overflow-hidden
    max-w-full
  "
        >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#050816] to-transparent" />
            <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#050816] to-transparent" />

            <motion.div
                className="flex w-max gap-4 sm:gap-8 py-4"
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    duration: 18,
                    ease: 'linear',
                    repeat: Infinity,
                }}
            >
                {[...technologies, ...technologies, ...technologies].map(
                    (icon, index) => (
                        <div
                            key={index}
                            className="
                flex
                h-12
                w-12
                sm:h-14
                sm:w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-md
                shadow-lg
                shadow-black/20
              "
                        >
                            {icon}
                        </div>
                    )
                )}
            </motion.div>
        </div>
    )
}