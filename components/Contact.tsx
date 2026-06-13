'use client'

import { motion } from 'framer-motion'
import {
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    Briefcase,
    Brain,
    Users,
    Rocket
} from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const contactInfo = [
    {
        icon: <Mail size={22} />,
        title: 'Email',
        value: 'priyanksondagar3@gmail.com',
        href: 'mailto:priyanksondagar3@gmail.com',
    },
    {
        icon: <Phone size={22} />,
        title: 'Phone',
        value: '+91 84698 93890',
        href: 'tel:+918469893890',
    },
    {
        icon: <MapPin size={22} />,
        title: 'Location',
        value: 'Rajkot, Gujarat, India',
        href: '#',
    },
]

const opportunities = [
    {
        icon: <Briefcase size={18} />,
        title: 'Senior Software Engineer',
    },
    {
        icon: <Brain size={18} />,
        title: 'AI Engineer',
    },
    {
        icon: <Users size={18} />,
        title: 'Technical Lead',
    },
    {
        icon: <Rocket size={18} />,
        title: 'Contract Consulting',
    },
]

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-20 overflow-hidden"
        >
            {/* Background Glow */}
            <div
                className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-indigo-600/10
          blur-[150px]
        "
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-4">
                        Contact
                    </p>

                    <h2 className="text-4xl md:text-6xl font-bold">
                        Let&apos;s Build Something Great
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
                        Open to exciting opportunities in software engineering,
                        AI-powered applications, technical leadership and
                        enterprise product development.
                    </p>
                </motion.div>

                {/* Opportunity Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="
            mt-12
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
          "
                >
                    {opportunities.map(item => (
                        <div
                            key={item.title}
                            className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-4
                flex
                flex-col
                items-center
                justify-center
                text-center
              "
                        >
                            <div className="text-indigo-400 mb-2">
                                {item.icon}
                            </div>

                            <p className="text-sm text-slate-300">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* Main CTA Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="
            mt-12
            rounded-3xl
            border
            border-indigo-500/20
            bg-gradient-to-br
            from-indigo-500/10
            via-purple-500/5
            to-transparent
            backdrop-blur-xl
            p-8
            md:p-10
          "
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                                <span className="text-green-400 font-medium">
                                    Available for Work
                                </span>
                            </div>

                            <h3 className="mt-4 text-3xl font-bold">
                                Ready for the next challenge
                            </h3>

                            <p className="mt-4 text-slate-400 max-w-xl leading-relaxed">
                                Building scalable enterprise applications,
                                cloud-native architectures and AI-powered
                                solutions using modern technologies.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="mailto:priyanksondagar3@gmail.com"
                                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-indigo-600
                  px-6
                  py-3
                  text-white
                  font-medium
                  shadow-lg
                  shadow-indigo-600/30
                  transition-all
                  hover:bg-indigo-500
                "
                            >
                                Email Me
                                <ArrowUpRight size={18} />
                            </a>

                            <a
                                href="/Priyank_Sondagar_CV.pdf"
                                download
                                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-6
                  py-3
                  text-white
                  transition-all
                  hover:border-indigo-500/30
                "
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                    {contactInfo.map((item, index) => (
                        <motion.a
                            key={item.title}
                            href={item.href}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                            }}
                            whileHover={{
                                y: -6,
                            }}
                            className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-6
                hover:border-indigo-500/30
                transition-all
              "
                        >
                            <div className="text-indigo-400 mb-4">
                                {item.icon}
                            </div>

                            <h4 className="font-semibold text-lg">
                                {item.title}
                            </h4>

                            <p className="mt-2 text-slate-400">
                                {item.value}
                            </p>
                        </motion.a>
                    ))}
                </div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="
            flex
            flex-wrap
            justify-center
            gap-4
            mt-12
          "
                >
                    <a
                        href="https://github.com/priyanksondagar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              px-5
              py-3
              hover:border-indigo-500/30
              transition-all
            "
                    >
                        <FaGithub size={18} />
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/priyanksondagar3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              px-5
              py-3
              hover:border-indigo-500/30
              transition-all
            "
                    >
                        <FaLinkedin size={18} className='text-blue-400' />
                        LinkedIn
                    </a>
                </motion.div>

                {/* Footer */}
                <div className="mt-20 text-center">
                    <p className="text-slate-500 text-sm">
                        Designed & Developed by Priyank Sondagar © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </section>
    )
}