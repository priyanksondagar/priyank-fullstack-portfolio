'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
    {
        company: 'CPP India',
        role: 'Senior Software Engineer',
        period: 'Oct 2023 — Present',
        location: 'Ahmedabad, India',

        achievements: [
            'Built enterprise fintech & insurance platforms serving 1M+ users',
            'Worked with SBI, ICICI Bank and Bajaj Finance',
            'Designed event-driven microservices using AWS ECS, Lambda & SQS',
            'Reduced infrastructure cost by 30%',
            'Delivered 99.9% uptime systems',
        ],

        tech: [
            'NestJS',
            'Next.js',
            'TypeScript',
            'AWS',
            'Docker',
            'PostgreSQL',
        ],

        highlight: '1M+ Users',
    },

    {
        company: 'eDelta Enterprise Solutions',
        role: 'Senior Software Engineer / Team Lead',
        period: 'Apr 2021 — Oct 2023',

        achievements: [
            'Led team of 5 engineers',
            'Delivered ERP, CRM and SaaS products',
            'Reduced delivery timelines by 20%',
            'Received Inspire Cum Best Team Leader Award',
            'Owned architecture to deployment lifecycle',
        ],

        tech: [
            'Node.js',
            'NestJS',
            'React',
            'AWS',
            'Docker',
            'PostgreSQL',
        ],

        highlight: 'Team Lead',
    },

    {
        company: 'Proficient Technologies',
        role: 'Web Developer',
        period: 'Oct 2020 — Apr 2021',

        achievements: [
            'Built full-stack ERP modules',
            'Worked across frontend and backend',
            'Created REST APIs',
            'Designed relational database models',
        ],

        tech: [
            'Node.js',
            'JavaScript',
            '.NET',
            'HTML',
            'CSS',
        ],

        highlight: 'Career Start',
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative py-32"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-4">
                        Career Journey
                    </p>

                    <h2 className="text-5xl font-bold">
                        Experience
                    </h2>

                    <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
                        Building scalable fintech,
                        SaaS and AI-powered systems
                        across enterprise environments.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="space-y-8">
                    {
                        experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{
                                    y: -4,
                                }}
                                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-transparent"
                                />
                                <div className="relative z-10">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">
                                                {exp.role}
                                            </h3>
                                            <p className="text-indigo-400 mt-1">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-400">
                                            <Calendar size={16} />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <ul className="mt-6 space-y-3">
                                        {exp.achievements.map(item => (
                                            <li
                                                key={item}
                                                className="flex gap-3 text-slate-300"
                                            >
                                                <span className="text-indigo-400">
                                                    ▹
                                                </span>

                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 mt-8">
                                        {exp.tech.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-sm text-slate-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>


            </div>
        </section>
    )
}