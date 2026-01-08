import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";


const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        formRef.current.reset();

        setTimeout(() => setSent(false), 3000);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-28 bg-[#0b0d12] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#e6e8ee]">
            Get in <span className="bg-gradient-to-br from-primary-500 to-accent-500 bg-clip-text text-transparent">Touch</span>
          </h2>

          <div className="mx-auto mt-4 h-[2px] w-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full" />

          <p className="mt-6 text-neutral-400 max-w-xl mx-auto">
            Have an idea or opportunity in mind? Let’s talk.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* LEFT CARD */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              rounded-2xl border border-white/10
              bg-white/5 backdrop-blur
              p-8 space-y-8
            "
          >
            <div>
              <h3 className="text-xl font-semibold text-[#e6e8ee] mb-2">
                Let’s Connect
              </h3>
              <p className="text-neutral-400 text-sm">
                Reach out through any of these channels. I usually reply within a day.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary-400" />
              <a
                href="mailto:dharanshetty05@gmail.com"
                className="text-neutral-200 hover:text-white transition-colors"
              >
                dharanshetty05@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-accent-400" />
              <span className="text-neutral-300">
                Udupi, Karnataka, India
              </span>
            </div>

            {/* Socials */}
            <div className="pt-4 space-y-3">
              <p className="text-xs uppercase tracking-wide text-neutral-500">
                Follow Me
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/dharan-shetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 px-4 py-2
                    rounded-full border border-white/10
                    bg-white/5 text-sm text-neutral-300
                    hover:text-white transition
                  "
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/dharanshetty05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2 px-4 py-2
                    rounded-full border border-white/10
                    bg-white/5 text-sm text-neutral-300
                    hover:text-white transition
                  "
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              rounded-2xl border border-white/10
              bg-white/5 backdrop-blur
              p-8
            "
          >
            <h3 className="text-xl font-semibold text-[#e6e8ee] mb-6">
              Send a Message
            </h3>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mb-4 text-sm text-green-400 flex items-center gap-2"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">
                  ✓
                </span>
                Message sent successfully
              </motion.div>
            )}


            <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                className="
                  w-full rounded-xl bg-black/40
                  border border-white/10
                  px-4 py-3 text-sm text-neutral-200
                  placeholder-neutral-500
                  focus:outline-none focus:border-primary-500
                "
              />

              <input
                type="email"
                name="reply_to"
                placeholder="Your email"
                className="
                  w-full rounded-xl bg-black/40
                  border border-white/10
                  px-4 py-3 text-sm text-neutral-200
                  placeholder-neutral-500
                  focus:outline-none focus:border-primary-500
                "
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project..."
                className="
                  w-full rounded-xl bg-black/40
                  border border-white/10
                  px-4 py-3 text-sm text-neutral-200
                  placeholder-neutral-500
                  focus:outline-none focus:border-primary-500
                  resize-none
                "
              />

              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full rounded-xl py-3
                  bg-gradient-to-br from-primary-500 to-accent-500
                  text-sm font-medium text-white
                  transition
                  ${loading ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"}
                `}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
