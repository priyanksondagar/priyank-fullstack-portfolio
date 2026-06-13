'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const projects = [
  {
    featured: true,
    title: 'CPP Platform',
    description:
      'Enterprise insurance product management platform for SBI, ICICI, and Bajaj Finance. Handled policy lifecycle, claims processing, and real-time banking API integrations at scale.',
    url: 'https://portal.cppwebservices.in/',
    stats: '99.99% Uptime & 1M+ Users',

    stack: [
      'React',
      'Next.js',
      'NestJS',
      'TypeScript',
      'AWS',
      'Github Co-pilot',
      'MicroServices',
      'MicroFrontend',
    ],
  },

  {
    title: 'Wybrid',
    description:
      'Workplace and property management system covering booking, asset tracking, and tenant communication modules. Integrated third-party APIs for payment and notification workflows.',
    url: 'https://wybrid.com/',
    stack: [
      'React',
      'Node JS',
      'AWS',
      'PostgreSQL',
      'MongoDB',
    ],
  },

  {
    title: 'Therabody E-commerce Platform',
    description:
      `Developed and maintained backend APIs for Therabody's IoT wellness device e-commerce platform, integrating Contentful CMS to
      manage product catalog, content delivery, and inventory workflows. Enabled seamless content sync between CMS and storefront,
      reducing manual update effort and ensuring consistent product data across web and mobile channels`,
    url: 'https://www.therabody.com/',
    stack: [
      'Next.js',
      'NestJS',
      'Redis',
      'AWS',
    ],
  },

  {
    title: 'AI Pitch Analyzer',
    description:
      'Full-stack SaaS platform that analyzes job descriptions using RAG pipelines and LLM APIs to generate tailored cover letters and client proposals. Features JWT authentication, usage-based subscription tiers, and real-time AI streaming responses.',
    url: 'https://github.com/priyanksondagar/ai-pitch-analyzer',
      stack: [
      'Next.js 14',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'LangChain',
      'OpenAI API',
      'AWS',
      'Docker',
    ],
  },
]

const highlights = [
  {
    value: '10+',
    label: 'Projects Delivered',
  },
  {
    value: '5+',
    label: 'Years Experience',
  },
  {
    value: '3+',
    label: 'Enterprise Clients',
  },
  {
    value: 'AI',
    label: 'LLM Solutions',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>

        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            mb-14
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
          "
        >
          {highlights.map(item => (
            <div
              key={item.label}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-5
                text-center
              "
            >
              <p className="text-3xl font-bold text-white">
                {item.value}
              </p>

              <p className="text-sm text-slate-400 mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-indigo-500/20
            bg-gradient-to-br
            from-indigo-500/10
            via-purple-500/5
            to-transparent
            p-8
            md:p-10
            mb-10
          "
        >
          <div className="absolute inset-0 bg-indigo-500/5 blur-3xl" />

          <div className="relative z-10">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-indigo-500/30
                bg-indigo-500/10
                px-4
                py-2
                text-sm
                text-indigo-300
              "
            >
              <Sparkles size={14} />
              Featured Project
            </div>

            <h3 className="mt-6 text-3xl md:text-4xl font-bold">
              {projects[0].title}
            </h3>

            <p className="mt-5 max-w-3xl text-slate-400 leading-relaxed">
              {projects[0].description}
            </p>

            <div className="mt-6 text-2xl font-bold text-indigo-400">
              {projects[0].stats}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {projects[0].stack.map(skill => (
                <span
                  key={skill}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.05]
                    text-sm
                    text-slate-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
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
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

              </div>

              <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.stack.map(skill => (
                  <span
                    key={skill}
                    className="
                      text-xs
                      px-3
                      py-1.5
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-slate-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}