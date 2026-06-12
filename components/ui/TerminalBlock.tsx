'use client'
import { motion } from 'framer-motion'

const codeLines = [
  { indent: 0, text: 'const priyank = {', color: 'text-slate-300' },
  { indent: 1, text: 'role:', color: 'text-indigo-400', value: '"Senior Software Engineer / Team Lead",' },
  { indent: 1, text: 'experience:', color: 'text-indigo-400', value: '"5+ Years",' },
  { indent: 1, text: 'technologies:', color: 'text-indigo-400', value: '["Node.js", "React" ,"Next.js", "NestJS", "AWS"],' },
  { indent: 1, text: 'domai:', color: 'text-purple-400', value: '["FinTech", "Banking", "E-commerce", "Real Estate"],' },
  { indent: 1, text: 'worked_with:', color: 'text-purple-400', value: '["SBIC", "ICICI", "Bajaj Finance"],' },
  { indent: 1, text: 'ai:', color: 'text-purple-400', value: '["LangChain", "RAG", "OpenAI"],' },
  { indent: 1, text: 'leadership:', color: 'text-yellow-400', value: '"Team Lead",' },
  { indent: 1, text: 'current_location:', color: 'text-yellow-400', value: '"Rajkot, Gujarat",' },
  { indent: 1, text: 'open_to:', color: 'text-yellow-400', value: '"Remote / Relocate",' },
  { indent: 0, text: '}', color: 'text-slate-300' },
]

export default function TerminalBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative w-full max-w-lg"
    >
      {/* Glow behind terminal */}
      <div className="absolute inset-0 bg-indigo-600/10 blur-2xl rounded-2xl" />

      {/* Terminal window */}
      <div className="relative bg-[#0d0d16] border border-[#1e1e2e] rounded-2xl overflow-hidden shadow-2xl">

        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#111118] border-b border-[#1e1e2e]">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-xs text-slate-500 font-mono">priyank.config.ts</span>
        </div>

        {/* Code content */}
        <div className="p-6 font-mono text-md leading-7">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="flex gap-2"
              style={{ paddingLeft: `${line.indent * 20}px` }}
            >
              <span className={line.color}>{line.text}</span>
              {line.value && (
                <span className="text-emerald-400">{line.value}</span>
              )}
            </motion.div>
          ))}

          {/* Blinking cursor */}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-4 bg-indigo-400 ml-1 translate-y-0.5"
          />
        </div>
      </div>
    </motion.div>
  )
}