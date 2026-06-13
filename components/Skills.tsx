'use client'

import { motion } from 'framer-motion'

const skillCategories = [
    {
        title: 'Frontend Engineering',
        icon: '⚛️',
        skills: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Tailwind CSS',
            'HTML5',
            'CSS3',
        ],
    },
    {
        title: 'Backend Engineering',
        icon: '🚀',
        skills: [
            'Node.js',
            'NestJS',
            'Express',
            'GraphQL',
            'REST APIs',
            'Jest',
        ],
    },
    {
        title: 'AI & LLM',
        icon: '🤖',
        skills: [
            'OpenAI',
            'LangChain',
            'RAG',
            'Vector DB',
            'Prompt Engineering',
            'Pinecone',
        ],
    },
    {
        title: 'Cloud & DevOps',
        icon: '☁️',
        skills: [
            'AWS',
            'Docker',
            'Kafka',
            'Kubernetes',
            'CI/CD',
            'GitHub Actions',
        ],
    },
    {
        title: 'Databases',
        icon: '🗄️',
        skills: [
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'DynamoDB',
            'Elasticsearch',
        ],
    },
    {
        title: 'Architecture',
        icon: '🏗️',
        skills: [
            'Microservices',
            'System Design',
            'API Design',
            'Micro Frontends',
            'Team Leadership',
            'Agile',
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative py-20"
        >
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-indigo-400 text-sm uppercase tracking-[0.3em] mb-4">
                        Expertise
                    </p>

                    <h2 className="text-5xl font-bold">
                        Technical Skills
                    </h2>

                    <p className="mt-5 text-slate-400 max-w-1xl mx-auto">
                        Building scalable enterprise platforms,
                        AI-powered products, and cloud-native architectures.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                y: -6,
                                scale: 1.02,
                            }}
                            className="
            relative
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-6
            overflow-hidden
          "
                        >
                            <div
                                className="
              absolute
              inset-0
              opacity-0
              hover:opacity-100
              transition-opacity
              bg-gradient-to-br
              from-indigo-500/10
              via-purple-500/5
              to-transparent
            "
                            />

                            <div className="relative z-10">
                                <div className="text-3xl mb-4">
                                    {category.icon}
                                </div>

                                <h3 className="text-xl font-semibold mb-5">
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map(skill => (
                                        <span
                                            key={skill}
                                            className="
                    px-3
                    py-1.5
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
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
                    ))}
                </div>
            </div>
        </section>
    )
}