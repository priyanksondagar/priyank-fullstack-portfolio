'use client'

import { motion } from 'framer-motion'
import {
    Briefcase,
    Rocket,
    Brain,
    Building2,
} from 'lucide-react'

const stats = [
    {
        icon: <Briefcase size={22} />,
        value: '5+',
        label: 'Years Experience',
    },
    {
        icon: <Rocket size={22} />,
        value: '10+',
        label: 'Projects Delivered',
    },
    {
        icon: <Building2 size={22} />,
        value: '3+',
        label: 'Enterprise Clients',
    },
    {
        icon: <Brain size={22} />,
        value: 'AI',
        label: 'LLM & RAG Solutions',
    },
]

export default function About() {
    return (
        <section
            id="about"
            className="
      relative
      py-20
      overflow-hidden
      "
        >
            {/* Background Glow */}
            <div
                className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        h-[500px]
        w-[500px]
        rounded-full
        bg-indigo-600/10
        blur-[120px]
        "
            />

            <div
                className="
        relative
        z-10
        mx-auto
        max-w-7xl
        px-6
        "
            >
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <p
                        className="
            text-indigo-400
            uppercase
            tracking-[0.25em]
            text-sm
            font-medium
            "
                    >
                        About Me
                    </p>

                    <h2
                        className="
            mt-4
            text-4xl
            md:text-5xl
            font-bold
            "
                    >
                        Building Software
                        <span
                            className="
              block
              bg-gradient-to-r
              from-indigo-400
              to-purple-400
              bg-clip-text
              text-transparent
              "
                        >
                            That Use Across The World
                        </span>
                    </h2>
                </motion.div>

                <div
                    className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
          "
                >
                    {/* Story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
              backdrop-blur-xl
              p-8
              "
                        >
                            <p className="text-slate-300 leading-8">
                                Senior Full Stack Engineer with 5+ years of experience in designing and delivering
                                enterprise-grade, AI-integrated web applications across
                                fintech, insurance, ERP, and Real Estate domains.

                                <br />
                                <br />

                                Proven track record building production systems for
                                regular sales of State Bank of India, ICICI Bank, and Bajaj Finance.
                                Deep expertise in Next.js, Nest.JS, TypeScript, and AWS, with hands-on
                                experience building LLM-powered features using LangChain, RAG pipelines, and OpenAI API.

                                <br />
                                <br />

                                Strong technical leader with a
                                demonstrated ability to architect scalable microservices, mentor teams, and own products end-to-end
                                from architecture through cloud deployment

                                <br />
                                <br />
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="
            grid
            grid-cols-2
            gap-5
            "
                    >
                        {stats.map((item) => (
                            <div
                                key={item.label}
                                className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-6
                hover:border-indigo-500/30
                transition-all
                duration-300
                "
                            >
                                <div className="text-indigo-400">
                                    {item.icon}
                                </div>

                                <div
                                    className="
                  mt-4
                  text-3xl
                  font-bold
                  text-white
                  "
                                >
                                    {item.value}
                                </div>

                                <div
                                    className="
                  mt-2
                  text-sm
                  text-slate-400
                  "
                                >
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
