"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

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
      className="group flex items-center gap-3 border border-black rounded-full py-3 pl-3 pr-5 transition-colors duration-150 hover:border-black"
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white shrink-0">
        {icon}
      </span>
      <span className="font-inter text-[15px] font-medium text-black truncate">
        {label}
      </span>
      <ArrowUpRight
        size={15}
        className="ml-auto text-black transition-all duration-150 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Using Web3Forms (Free, no registration required to test immediately)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "134601ee-2797-491a-a967-af130e9f7945", // Get a free key at web3forms.com
          name: form.name,
          email: form.email,
          message: form.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-6 pt-24 pb-32 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="flex justify-center items-baseline gap-4 flex-wrap">
          <span className="font-inter text-[95px] md:text-[95px] font-semibold tracking-[-2px] text-black">
            Get In
          </span>
          <span className="font-noto text-[80px] md:text-[88px] font-light italic leading-none tracking-[-2px] scale-y-[1.15] origin-bottom inline-block text-black">
            Touch!
          </span>
        </div>
        <span className="font-inter flex flex-col items-center justify-center text-center text-[20px] font-semibold tracking-[-1px]">
          Whether it's an opportunity, a collaboration, or just a conversation, I'm always open for a fresh discussion!
          <br />
          Pick your preferred channel.
        </span>

        <div className="hidden lg:block absolute top-1/2 right-[calc(-50vw+50%)] -translate-y-1/2 w-[270px] h-[270px] opacity-90 pointer-events-none">
          <Image src="/g5.png" alt="" fill className="object-contain" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-16">
          {/* Left: direct links */}
          <div className="flex flex-col gap-3 justify-start">
            <ContactPill icon={<Mail size={15} />} label={EMAIL} href={`mailto:${EMAIL}`} />
            <ContactPill icon={<GithubIcon size={15} />} label={GITHUB_HANDLE} href={GITHUB_URL} />
            <ContactPill icon={<LinkedinIcon size={15} />} label={LINKEDIN_NAME} href={LINKEDIN_URL} />
          </div>

          {/* Right: direct endpoint form submission */}
          <div className="border border-black rounded-2xl overflow-hidden min-h-[380px] flex flex-col bg-white">
            <div className="border-b border-black px-6 py-4">
              <h3 className="font-inter text-[16px] font-semibold text-black">
                Send your message directly
              </h3>
            </div>

            {status === "success" ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                <CheckCircle2 size={44} className="text-black mb-3" strokeWidth={1.5} />
                <h4 className="font-inter font-bold text-[18px] text-black">Message Sent!</h4>
                <p className="font-inter text-[14px] text-black/60 mt-1 max-w-[280px]">
                  Thanks for reaching out, Bhargavi. I'll review this and get back to you shortly.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-6 font-inter text-[13px] font-medium underline uppercase tracking-wider text-black/50 hover:text-black"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5 flex-1 justify-between">
                <div className="flex flex-col gap-5">
                  <div>
                    <label className="font-inter font-bold text-[15px] uppercase tracking-wide text-black">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      disabled={status === "submitting"}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full mt-1.5 bg-transparent border-b border-black py-1.5 font-inter text-[15px] text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="font-inter font-bold text-[15px] uppercase tracking-wide text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      disabled={status === "submitting"}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full mt-1.5 bg-transparent border-b border-black py-1.5 font-inter text-[15px] text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="font-inter font-bold text-[15px] uppercase tracking-wide text-black">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      disabled={status === "submitting"}
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What's on your mind?"
                      className="w-full mt-1.5 bg-transparent border-b border-black py-1.5 font-inter text-[15px] text-black placeholder:text-black/30 focus:outline-none focus:border-black transition-colors resize-none disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="self-start flex items-center gap-2 bg-black text-white rounded-full pl-5 pr-4 py-2.5 font-inter text-[14px] font-medium transition-all duration-150 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === "submitting" ? (
                      <>
                        Sending...
                        <Loader2 size={15} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send message
                        <ArrowUpRight size={15} />
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-red-600 font-inter text-[13px] mt-1">
                      Something went wrong. Please try again or use a direct link.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}