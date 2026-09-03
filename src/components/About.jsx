import React from 'react'
import { motion, useInView  } from 'framer-motion'
import { FaCode, FaPalette, FaRocket, FaLightbulb } from 'react-icons/fa'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

const itemUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const itemRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.25 }}
      className="py-8 lg:py- lg:pb-10 px-6 bg-[#0b0d12] text-[#e6e8ee]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-semibold tracking-tight inline-flex items-center gap-3"
          >
            <span className="text-[#e6e8ee]">About</span>
            <span className="
              bg-gradient-to-br from-primary-500 to-accent-500
              bg-clip-text text-transparent
            ">
              Me
            </span>
          </motion.h2>

          {/* Gradient underline */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '6.5rem', opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
            viewport={{ once: true }}
            className="
              mx-auto mt-4 h-[2px]
              bg-gradient-to-br from-primary-500 to-accent-500
              rounded-full
            "
          />
        </div>
      </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-20 items-start">
          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemUp}
              className="text-xl lg:text-2xl font-medium text-[#e6e8ee] leading-snug mt-10 mb-10"
            >
              I build scalable full-stack applications with a focus on performance, clean architecture, and AI-powered workflows.
            </motion.p>

            <div className="grid gap-8 text-[16.5px] leading-[1.7] text-[#c7cad6]">
              <motion.p variants={itemUp}>
                I’m <span className="text-[#7c6cff] font-medium">Dharan Shetty</span>, a
                software developer building modern, scalable web applications across
                the frontend and backend using{' '}
                <span className="text-[#a78bfa] font-medium">
                  React, Next.js, Node.js, PostgreSQL, MongoDB, and modern AI integrations
                </span>.
              </motion.p>

              <motion.p variants={itemUp}>
                During my internship at{' '}
                <span className="text-[#7c6cff] font-medium">
                  KPMG’s Generative AI COE
                </span>
                , I contributed to internal platforms by building frontend features, 
                integrating backend APIs, and improving application performance for production systems.
              </motion.p>

              <motion.p variants={itemUp}>
                I enjoy building systems{' '}
                <span className="text-[#a78bfa] font-medium">
                  that balance clean user experiences with scalable backend architecture
                </span>
                , focusing on maintainability, performance, and practical problem-solving.

                  
              </motion.p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-widest text-[#9aa0b3] mb-8">
              Core Strengths
            </p>

            <div className="grid gap-6">
              {[
                {
                  icon: <FaCode />,
                  title: 'Full-Stack Development',
                  desc: 'Scalable frontend and backend systems using modern tooling.'
                },
                {
                  icon: <FaPalette />,
                  title: 'UI & Product Sense',
                  desc: 'Clean layouts, thoughtful interactions, and user-first thinking.'
                },
                {
                  icon: <FaLightbulb />,
                  title: 'Problem Solving',
                  desc: 'Designing practical, maintainable solutions for real-world engineering problems.'
                },
                {
                  icon: <FaRocket />,
                  title: 'AI & Automation',
                  desc: 'Building AI-integrated workflows and practical automation systems using modern LLM tooling.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemRight}
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="relative group"
                >
                  {/* Glow layer */}
                  <motion.div
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#7c6cff]/30 to-[#a78bfa]/30 blur-xl"
                  />

                  {/* Card */}
                  <motion.div
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -6 }
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="
                      relative
                      flex items-start gap-4 p-6
                      rounded-xl
                      bg-[#11131a]
                      border border-[#1f2330]
                      group-hover:border-[#7c6cff]/40
                      transition-colors
                    "
                  >
                  {/* Icon */}
                  <motion.div
                    variants={{
                      rest: { scale: 1, opacity: 0.8 },
                      hover: { scale: 1.1, opacity: 1 }
                    }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="text-[#7c6cff] mt-1"
                  >
                    {item.icon}
                  </motion.div>

                  <div>
                    <h4 className="font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#9aa0b3] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About
