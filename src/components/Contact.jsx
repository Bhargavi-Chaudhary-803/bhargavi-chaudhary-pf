"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";

const EMAIL = "bhargavichaudhary803@gmail.com";
const GITHUB_URL = "https://github.com/Bhargavi-Chaudhary-803";
const GITHUB_HANDLE = "Bhargavi-Chaudhary-803";
const LINKEDIN_URL = "https://www.linkedin.com/in/bhargavi-chaudhary-55384936a/";
const LINKEDIN_NAME = "Bhargavi Chaudhary";


function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.8 1.18 1.82 1.18 3.08 0 4.41-2.7 5.38-5.26 5.67.42.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.66.8.55A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function ContactPill({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 border border-black/15 rounded-full py-3 pl-3 pr-5 transition-colors duration-150 hover:border-black"
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white shrink-0">
        {icon}
      </span>
      <span className="font-inter text-[15px] font-medium text-black truncate">
        {label}
      </span>
      <ArrowUpRight
        size={15}
        className="ml-auto text-black/30 transition-all duration-150 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));


  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "someone"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-6 pt-24 pb-32 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Header — mirrors the About / Projects type pairing */}
        <div className="flex justify-center items-baseline gap-4 flex-wrap">
          <span className="font-inter text-[95px] md:text-[95px] font-semibold tracking-[-2px] text-black">
            Get In
          </span>
          <span className="font-noto text-[80px] md:text-[80px] font-light italic leading-none tracking-[-2px] scale-y-[1.15] origin-bottom inline-block text-black">
            Touch!
          </span>
        </div>
        <span className="font-inter justify-center text-[20px] font-semibold tracking-[-1px] text-align-center">
          Whether it's an opportunity, a collaboration, or just a conversation,
          I'm always open for a fresh discussion! Pick your preferred channel.
        </span>


        <div className="hidden lg:block fixed top-1/2 right-0 -translate-y-1/2 w-[240px] h-[240px] opacity-90 pointer-events-none z-50">
          <Image src="/g5.png" alt="" fill className="object-contain" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16">
          {/* Left: direct links */}
          <div className="flex flex-col gap-3 justify-start">
            <ContactPill
              icon={<Mail size={15} />}
              label={EMAIL}
              href={`mailto:${EMAIL}`}
            />
            <ContactPill
              icon={<GithubIcon size={15} />}
              label={GITHUB_HANDLE}
              href={GITHUB_URL}
            />
            <ContactPill
              icon={<LinkedinIcon size={15} />}
              label={LINKEDIN_NAME}
              href={LINKEDIN_URL}
            />
          </div>

          {/* Right: message form */}
          <div className="border border-black/10 rounded-2xl overflow-hidden">
            <div className="border-b border-black/10 px-6 py-4">
              <h3 className="font-inter text-[16px] font-semibold text-black">
                Send your message directly
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
              <div>
                <label className="font-inter text-[12px] uppercase tracking-wide text-black/40">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full mt-1.5 bg-transparent border-b border-black/15 py-1.5 font-inter text-[15px] text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="font-inter text-[12px] uppercase tracking-wide text-black/40">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  className="w-full mt-1.5 bg-transparent border-b border-black/15 py-1.5 font-inter text-[15px] text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="font-inter text-[12px] uppercase tracking-wide text-black/40">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className="w-full mt-1.5 bg-transparent border-b border-black/15 py-1.5 font-inter text-[15px] text-black placeholder:text-black/25 focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="self-start flex items-center gap-2 bg-black text-white rounded-full pl-5 pr-4 py-2.5 font-inter text-[14px] font-medium mt-1 transition-transform duration-150 hover:-translate-y-0.5"
              >
                {sent ? "Opening your email…" : "Send message"}
                <ArrowUpRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}