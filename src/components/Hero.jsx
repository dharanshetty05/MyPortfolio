import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import ProfileImg from '../assets/profile.jpg'

const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setTilt({
      x: (y - rect.height / 2) / 22,
      y: (x - rect.width / 2) / 22
    })
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return

    const navbarOffset = 80
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navbarOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  const resetTilt = () => setTilt({ x: 0, y: 0 })

  const fullName = 'Dharan'
  const [typedName, setTypedName] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1))
      index++
      if (index === fullName.length) {
        clearInterval(interval)
        setTimeout(() => setShowCursor(false), 800)
      }
    }, 120) // typing speed

    return () => clearInterval(interval)
  }, [])


  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen overflow-hidden flex items-center bg-[#0b0d12] text-[#e6e8ee]"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover rotate-180"
        src="/sky.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-[#0b0d12]/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0d12]/50 to-[#0b0d12]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-4 items-center py-4 lg:py-0">
        {/* LEFT */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
          <div className="space-y-3">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-[-0.02em]">
              Hi, I’m{' '}
              <span className="text-[#7c6cff]">
                {typedName}
                {showCursor && (
                  <span className="ml-1 inline-block w-[2px] h-[1em] bg-[#7c6cff] animate-pulse align-middle" />
                )}
              </span>
            </h1>


            <h2 className="text-2xl lg:text-3xl font-normal text-[#c7cad6] leading-snug">
              I build{' '}
              <span className="text-[#a78bfa]">
                fast, scalable
              </span>{' '}
              web products that{' '}
              <span className="text-[#7c6cff]">
                convert
              </span>
            </h2>
          </div>

          <p className="hidden md:flex text-lg lg:text-xl text-[#c7cad6] max-w-2xl">
            Full-stack developer focused on performance, clean architecture,
            and user experiences that actually move metrics.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-1">
            <button
              onClick={() => scrollToSection('projects')}
              className="
                group inline-flex items-center justify-center
                px-8 py-4 rounded-lg
                bg-gradient-to-r from-[#7c6cff] to-[#a78bfa]
                text-black font-semibold
                shadow-[0_0_35px_rgba(124,108,255,0.4)]
                hover:shadow-[0_0_55px_rgba(124,108,255,0.6)]
                transition-all
              "
            >
              See What I’ve Built
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>


            <a
              href="/DHS_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                px-8 py-2 rounded-lg
                border border-[#1f2330]
                text-[#e6e8ee]
                hover:border-[#7c6cff]
                transition-all
              "
            >
              <FaDownload className="mr-2" />
              Resume
            </a>
          </div>

          {/* Social */}
          <div className="flex gap-6 justify-center lg:justify-start pt-0 mt-0">
            <a
              href="https://github.com/dharanshetty05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9aa0b3] hover:text-[#7c6cff] transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/dharan-shetty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9aa0b3] hover:text-[#7c6cff] transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:dharanshetty05@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9aa0b3] hover:text-[#7c6cff] transition"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000 mt-20 lg:mt-0 mb-0 lg:mb-0"
        >
          <motion.div
            animate={{
              y: [0, -14, 0],
              rotateZ: [0, 1.2, 0]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            }}
            className="relative"
          >
            {/* Outer glow outline */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#7c6cff] to-[#a78bfa] opacity-40 blur-md" />

            {/* Inner dark separator */}
            <div className="absolute inset-0 rounded-full bg-[#0b0d12]" />

            {/* Profile image */}
            <img
              src={ProfileImg}
              alt="Dharan Shetty"
              className="
                relative
                w-72 h-72 lg:w-80 lg:h-80
                rounded-full
                object-cover
                ring-2 ring-[#1f2330]
                shadow-2xl
              "
            />
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden md:block absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-none">
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
        >
          {/* Dot */}
          <div className="w-3 h-3 rounded-full bg-[#7c6cff] shadow-[0_0_12px_rgba(124,108,255,0.6)]" />

          {/* Trail */}
          <div className="mt-3 w-[4px] h-14 bg-gradient-to-b from-[#7c6cff] to-transparent rounded-full opacity-80 shadow-[0_0_18px_rgba(124,108,255,0.4)]" />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
