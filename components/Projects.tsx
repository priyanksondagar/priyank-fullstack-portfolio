'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const projects = [
  {
    featured: true,
    title: 'AI Document Intelligence Platform',
    description:
      'Built an enterprise AI platform using LangChain, OpenAI and RAG for intelligent document search, contextual responses and knowledge retrieval.',

    stats: '10K+ Documents Processed',

    stack: [
      'Next.js',
      'NestJS',
      'OpenAI',
      'LangChain',
      'RAG',
      'AWS',
    ],
  },

  {
    title: 'SBI Fintech Platform',
    description:
      'Enterprise banking workflows, customer onboarding and financial operations platform.',

    stack: [
      'React',
      'NestJS',
      'AWS',
      'PostgreSQL',
    ],
  },

  {
    title: 'Bajaj Finance Portal',
    description:
      'Scalable financial services platform handling high-volume customer operations.',

    stack: [
      'Next.js',
      'NestJS',
      'Redis',
      'AWS',
    ],
  },

  {
    title: 'Enterprise ERP',
    description:
      'Business automation platform integrating multiple operational workflows.',

    stack: [
      'Node.js',
      'React',
      'PostgreSQL',
    ],
  },

  {
    title: 'RAG Knowledge Assistant',
    description:
      'Private enterprise chatbot powered by OpenAI, vector search and LangChain.',

    stack: [
      'LangChain',
      'OpenAI',
      'Pinecone',
    ],
  },

  {
    title: 'AWS Microservices',
    description:
      'Event-driven architecture built using ECS, Lambda, SQS and Docker.',

    stack: [
      'AWS',
      'Docker',
      'NestJS',
    ],
  },
]

const highlights = [
  {
    value: '20+',
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
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Production-grade applications, enterprise platforms,
            fintech systems and AI-powered solutions.
          </p>
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

            <button
              className="
                mt-8
                flex
                items-center
                gap-2
                text-indigo-400
                hover:text-indigo-300
                transition-colors
              "
            >
              View Case Study
              <ArrowUpRight size={18} />
            </button>
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

                <ArrowUpRight
                  size={18}
                  className="text-slate-500"
                />
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