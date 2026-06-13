'use client'

import { motion } from 'framer-motion'

const codeLines = [
  {
    key: 'role',
    value: '"Senior Software Engineer"',
    color: 'text-indigo-400',
  },
  {
    key: 'experience',
    value: '"5+ Years"',
    color: 'text-indigo-400',
  },
  {
    key: 'clients',
    value: '"SBI | ICICI | Bajaj"',
    color: 'text-purple-400',
  },
  {
    key: 'domain',
    value: '"FinTech | Real Estate | E-commerce"',
    mobileValue: '"FinTech | Real Estate"',
    color: 'text-purple-400',
  },
  {
    key: 'impact',
    value: '"1M+ Users"',
    color: 'text-green-400',
  },
  {
    key: 'stack',
    value: '"Next.js | NestJS | AWS"',
    color: 'text-yellow-400',
  },
  {
    key: 'ai',
    value: '"LangChain | RAG | OpenAI"',
    color: 'text-yellow-400',
  },
  {
    key: 'openTo',
    value: '"Remote / Relocate"',
    color: 'text-yellow-400',
  },
]

export default function TerminalBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full max-w-xl"
    >
      {/* Glow */} <div className="absolute inset-0 rounded-3xl bg-indigo-600/10 blur-3xl" />

      {/* Terminal */}
      <div className="relative overflow-hidden rounded-3xl border border-[#1e1e2e] bg-[#0d0d16]/95 shadow-2xl backdrop-blur-xl">

        {/* Header */}
        <div className="flex items-center gap-2 border-b border-[#1e1e2e] bg-[#111118] px-5 py-4">
          <div className="h-3 w-3 rounded-full bg-red-500/70" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <div className="h-3 w-3 rounded-full bg-green-500/70" />

          <span className="ml-3 font-mono text-xs text-slate-500">
            priyank.config.ts
          </span>
        </div>

        {/* Code */}
        <div className="p-6 font-mono text-sm md:text-base leading-8">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-200"
          >
            const priyank = {'{'}
          </motion.div>

          {codeLines.map((line, i) => (
            <motion.div
              key={line.key}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.6 + i * 0.08,
              }}
              className="flex gap-2 pl-5"
            >
              <span className={line.color}>
                {line.key}:
              </span>

              <span className="text-emerald-400">
                <span className="sm:hidden">
                  {line.mobileValue ?? line.value}
                </span>

                <span className="hidden sm:inline">
                  {line.value}
                </span>
                ,
              </span>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="text-slate-200"
          >
            {'}'}
          </motion.div>

          {/* Cursor */}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
            }}
            className="mt-2 ml-1 inline-block h-5 w-2 bg-indigo-400"
          />
        </div>
      </div>
    </motion.div>

  )
}
