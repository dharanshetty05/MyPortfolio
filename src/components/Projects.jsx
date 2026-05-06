import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "TaskFlow",
    description:
      "A real-time collaborative task manager with secure authentication, live updates, and scalable backend architecture for concurrent team workflows.",
    tech: ["Next.js", "Typescript", "PostgreSQL", "Node.js"],
    image: "/projects/taskflow.png",
    visit: "https://collaborative-task-manager-one-pied.vercel.app/",
    github: "https://github.com/dharanshetty05/collaborative-task-manager.git",
  },
  {
    title: "LeadCraftAI",
    description:
      "An AI-powered lead intelligence platform that analyzes Instagram business profiles and generates personalized cold outreach using LLM-driven workflows.",
    tech: ["Next.js", "Node.js", "MongoDB", "Groq API"],
    image: "/projects/leadcraft.png",
    visit: "https://github.com/dharanshetty05/LeadCraftAI",
    github: "https://github.com/dharanshetty05/LeadCraftAI",
  },
  {
    title: "AdSync AI",
    description:
      "An AI-driven landing page personalization engine that aligns website messaging with ad intent using structured LLM pipelines and real-time previews.",
    tech: ["Next.js", "Groq API", "Axios", "Cheerio"],
    image: "/projects/adsync.png",
    visit: "https://adsyncai.vercel.app/",
    github: "https://github.com/dharanshetty05/adsync-ai",
  },
  {
    title: "Palmstone Anjuna Retreat",
    description:
      "A responsive hospitality website focused on performance, modern UI design, and seamless user experience across devices.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/palmstone.png",
    visit: "http://palmstone-anjuna.vercel.app/",
    github: "https://github.com/dharanshetty05/palmstone-anjuna-retreat.git",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern developer portfolio built with React and Framer Motion to showcase projects, technical skills, and engineering experience.",
    tech: ["ReactJS", "Tailwind CSS", "Brand Identity"],
    image: "/projects/portfolio.png",
    visit: "https://dharan-shetty.vercel.app/",
    github: "https://github.com/dharanshetty05/MyPortfolio.git",
  },
  {
    title: "FitCoach",
    description:
      "A fitness coaching platform featuring structured workout plans, responsive UI, and scalable frontend architecture.",
    tech: ["Next.js", "Tailwind CSS", "Lucide React"],
    image: "/projects/fitcoach.png",
    visit: "https://fitcoach-sable.vercel.app/",
    github: "https://github.com/dharanshetty05/FitCoach.git",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const cardWidth = slider.firstChild.offsetWidth + 32;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const current = slider.scrollLeft;

    if (dir === "right") {
      current >= maxScroll - 5
        ? (slider.scrollLeft = 0)
        : slider.scrollBy({ left: cardWidth, behavior: "smooth" });
    }

    if (dir === "left") {
      current <= 5
        ? (slider.scrollLeft = maxScroll)
        : slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const onScroll = () => {
      const children = Array.from(slider.children).filter(
        (el) => el.tagName === "ARTICLE"
      )

      const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2

      let closestIndex = 0
      let closestDistance = Infinity

      children.forEach((child, index) => {
        const childCenter =
          child.offsetLeft + child.offsetWidth / 2

        const distance = Math.abs(sliderCenter - childCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }

    slider.addEventListener("scroll", onScroll, { passive: true })
    return () => slider.removeEventListener("scroll", onScroll)
  }, [])


  return (
    <section
      id="projects"
      className="relative py- bg-[#0b0d12] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}


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
              Projects
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

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gradient-to-br from-accent-500 to-accent-500 border border-neutral-700 hover:border-primary-400 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gradient-to-br from-primary-500 to-primary-500 border border-neutral-700 hover:border-primary-400 transition"
        >
          <FaChevronRight />
        </button>

        <div className="md:hidden flex justify-center mb-4 text-xs text-neutral-400">
          <span className="animate-pulse">Swipe to explore →</span>
        </div>


        {/* Slider */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="
              flex gap-8 px-2
              overflow-x-scroll no-scrollbar scroll-smooth
              snap-x snap-mandatory
            "
          >
                {/* Purple ambient glow (behind content) */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(168,85,247,0.18),transparent_70%)] z-0"
                />

            {projects.map((project, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                viewport={{ once: true }}
                className="
                  group relative
                  min-w-[92%] sm:min-w-[70%] md:min-w-[48%] lg:min-w-[32%]
                  snap-center
                  rounded-2xl bg-[#11131a] border border-neutral-800
                  group-hover:border-purple-400/40
                  overflow-hidden flex flex-col
                "
              >

                {/* Content ABOVE glow */}
                <div className="relative z-10 flex flex-col flex-1">
                  {/* Media */}
                  <div className="h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-white">
                      {project.title}
                    </h3>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-auto flex items-center justify-between">
                      <a
                        href={project.visit}
                        className="flex items-center gap-2 text-sm text-primary-400 hover:underline"
                      >
                        Visit <FaExternalLinkAlt size={12} />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-primary-400 transition"
                      >
                        <FaGithub size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const slider = sliderRef.current
                const card = slider?.children[index]
                if (!card) return

                slider.scrollTo({
                  left: card.offsetLeft,
                  behavior: "smooth",
                })
              }}
              className={`h-2 rounded-full transition-all ${
                activeIndex === index
                  ? "w-6 bg-primary-500"
                  : "w-2 bg-neutral-600"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>


        {/* View All Projects */}
        <div className="mt-20 flex justify-center">
          <a
            href="https://github.com/dharanshetty05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 text-sm text-neutral-300 hover:border-primary-400 hover:text-primary-400 transition"
          >
            <FaGithub />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
