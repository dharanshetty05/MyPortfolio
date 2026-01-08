import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPython,
  SiCplusplus,
  SiRedis,
  SiAdobe,
  SiOpenai,
  SiGoogle,
  SiFramer,
  SiVercel,
  SiPostman,
  SiNpm
} from "react-icons/si";

/* ---------------- CORE SKILLS ---------------- */

const coreSkills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" }
];

/* ---------------- ALL SKILLS (MARQUEE) ---------------- */

const skills = [
  ...coreSkills,
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Adobe Premiere Pro", icon: SiAdobe, color: "#9999FF" },
  { name: "ChatGPT", icon: SiOpenai, color: "#10A37F" },
  { name: "Google Gemini", icon: SiGoogle, color: "#4285F4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "npm", icon: SiNpm, color: "#CB3837" }
];

const rowA = [...skills, ...skills];
const rowB = [...skills.slice().reverse(), ...skills.slice().reverse()];

/* ---------------- MARQUEE CONFIG ---------------- */

const marquee = (direction, duration) => ({
  animate: {
    x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
  },
  transition: {
    duration,
    ease: "linear",
    repeat: Infinity
  }
});

/* ---------------- COMPONENT ---------------- */

const Skills = () => {
  return (
    <section className="py-20 bg-[#0b0d12] overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-4">
        
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
            <span className="text-[#e6e8ee]">My</span>
            <span className="
              bg-gradient-to-br from-primary-500 to-accent-500
              bg-clip-text text-transparent
            ">
              Tech Stack
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

        {/* ---------------- CORE SKILLS ---------------- */}
        <div className="max-w-5xl mx-auto mb-24">
          <p className="text-sm uppercase tracking-wide text-neutral-400 text-center mb-6">
            Core Skills
          </p>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-6">
            {coreSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/4 py-4"
                >
                  <Icon
                    className="w-8 h-8"
                    style={{ color: skill.color }}
                  />
                  <span className="text-xs text-neutral-300">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ---------------- MARQUEE ROW 1 ---------------- */}
      <div className="relative overflow-hidden">
        <motion.div {...marquee("left", 45)} className="flex gap-10 w-max">
          {rowA.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={`row1-${i}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur"
              >
                <Icon className="w-6 h-6" style={{ color: skill.color }} />
                <span className="text-sm text-neutral-200 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="h-10" />

      {/* ---------------- MARQUEE ROW 2 ---------------- */}
      <div className="relative overflow-hidden">
        <motion.div {...marquee("right", 55)} className="flex gap-10 w-max">
          {rowB.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={`row2-${i}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur"
              >
                <Icon className="w-6 h-6" style={{ color: skill.color }} />
                <span className="text-sm text-neutral-200 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
