'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import GridBackground from './ui/GridBackground'
import TerminalBlock from './ui/TerminalBlock'
import LaptopAnimation from './ui/CodeWriter'
import TechMarquee from './ui/TechMarquee'

export default function Hero() {

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <GridBackground />
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        {/* Available badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Available for Remote / Relocation
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.95,
                            }}
                            animate={{
                                opacity: 1,
                                y: [0, -10, 0],
                                scale: 1,
                            }}
                            transition={{
                                opacity: { duration: 0.8, delay: 0.2 },
                                scale: { duration: 0.8, delay: 0.2 },
                                y: {
                                    delay: 1.2,
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                },
                            }}
                        >
                            <LaptopAnimation />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.8,
                            }}
                            className="hidden md:block w-full max-w-md"
                        >
                            <TechMarquee />
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="mt-10 flex flex-wrap justify-center gap-4"
                        >
                            <a
                                href="#projects"
                                className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40"
                            >
                                View Projects
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="/Priyank_Sondagar_FullStack_CV.pdf"
                                download
                                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1e1e2e] hover:border-indigo-500/50 text-slate-300 hover:text-white font-medium text-sm transition-all duration-300 hover:bg-indigo-500/5"
                            >
                                <Download size={16} />
                                Download CV
                            </a>
                        </motion.div>

                    </motion.div>

                    {/* RIGHT SIDE — Terminal */}
                    <div className="flex justify-center lg:justify-end">
                        <TerminalBlock />
                    </div>

                </div>
            </div>
        </section >
    )
}