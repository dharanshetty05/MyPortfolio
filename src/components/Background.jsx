import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const Background = () => {
  const Briefcase = Icons.Briefcase;
  const GraduationCap = Icons.GraduationCap;
  const MapPin = Icons.MapPin;
  const CalendarDays = Icons.CalendarDays;

  return (
    <section id="background" className="py-0 px-4 bg-[#0b0d12]">
      <div className="max-w-7xl mx-auto">
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
            <span className="text-[#e6e8ee]">Experience</span>
            <span className="
              bg-gradient-to-br from-primary-500 to-accent-500
              bg-clip-text text-transparent
            ">
              & Education
            </span>
          </motion.h2>

          {/* Gradient underline */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '12.5rem', opacity: 1 }}
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* EXPERIENCE */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="lg:col-span-7"
            >
            <div className="flex items-center gap-2 text-purple-400 mb-6">
              <Briefcase size={18} />
              <span className="font-medium">Experience</span>
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl bg-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-8 py-10"
              >
                <h3 className="text-2xl text-white font-medium">
                  GenAI COE Intern
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-400">
                  <span>KPMG Global Services</span>
                  <span className="hidden sm:inline">•</span>

                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    Bengaluru
                  </span>

                  <span className="hidden sm:inline">•</span>

                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    Jan 2025 – Jun 2025
                  </span>
                </div>

                <div className="mt-4 h-px w-160 bg-white/20" />

                <ul className="mt-8 space-y-4 text-neutral-300 leading-relaxed max-w-xl">
                  <li>
                    Built and optimized frontend features for internal 
                    GenAI platforms used in enterprise consulting workflows.
                  </li>
                  <li>
                    Improved frontend responsiveness and application performance 
                    within Angular-based enterprise systems.
                  </li>
                  <li>
                    Worked with frontend and backend teams to integrate APIs, 
                    resolve system issues, and deliver production-ready features in Agile workflows.
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-2 text-purple-400 mb-6">
              <GraduationCap size={18} />
              <span className="font-medium">Education</span>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "B.Tech in Computer Science",
                  meta: "PES University · 2021 – 2025",
                  note:
                    "Focused on full-stack development, system design fundamentals, and scalable software engineering."
                },
                {
                  title: "Higher Secondary (PCMC)",
                  meta: "Alvas PU College · 2019 – 2021",
                  note: "KCET Rank: 1220 • Scored 99%"
                }
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="rounded-2xl border border-white/10 bg-white/4 px-6 py-6"
                >
                  <h4 className="text-lg text-white font-medium">
                    {edu.title}
                  </h4>
                  <p className="text-sm text-neutral-400 mt-1">{edu.meta}</p>
                  <p className="text-sm text-neutral-300 mt-4">{edu.note}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Background;
