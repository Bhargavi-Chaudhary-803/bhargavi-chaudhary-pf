import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen px-6 pt-16 bg-transparent relative">
      <div className="max-w-7xl mx-auto mt-[50px] relative">

        {/* 1. Left aligned: "Hi! I am" */}
        <div className="flex items-baseline gap-2 mt-8">
          <span className="font-inter text-[60px] font-normal tracking-[-2px]">
            Hi! I
          </span>
          <span className="font-noto text-[58px] font-normal italic tracking-[-0.04em] scale-y-110 origin-bottom">
            am
          </span>
        </div>

        {/* Added -ml-2 to the parent container */}
        <div className="flex items-baseline gap-5 -mt-5 -ml-1">
          <span className="font-inter text-[105px] font-semibold leading-none tracking-[-4px]">
            Bhargavi
          </span>
          <span className="font-noto text-[102px] font-light leading-none italic tracking-[-0.04em] scale-y-110 origin-bottom">
            Chaudhary
          </span>
        </div>

        {/* 3. Spacing */}
        <div className="h-12" />

        {/* Left column content wrapper to separate text flow from absolute graphics */}
        <div className="max-w-2xl flex flex-col">
          <p className="font-inter text-[30px] font-regular tracking-[-1px] leading-none text-left">
            Web Developer / UI.UX Designer / Visual Identity / Software Developer
          </p>
          
          <p className="font-inter text-[25px] font-medium mt-10 tracking-[-1px] text-left">
            I build seamless digital experiences & create products with clean design.
          </p>

          {/* Adjusted ONLY this margin to shift it down without affecting things below */}
          <p className="font-inter text-[30px] font-bold mt-10 tracking-[-1px] text-left">
            <a href="mailto:bhargavichaudhary803@gmail.com" className="hover:underline">
              Work With Me!
            </a>
          </p>
        </div>

        {/* Right graphic - explicitly pulled right without breaking text flow */}
        <div className="flex justify-end items-center space-x-[15px] mt-[-240px]">
          <Image
            src="/g1.png"
            alt=""
            width={260}
            height={260}
            className="object-contain"
          />
        </div>

        {/* Social icons - right aligned */}
        <div className="flex justify-center items-center space-x-[15px] mt-[-80px] ml-[500px]">
          <a
            href="mailto:bhargavichaudhary803@gmail.com"
            aria-label="Email"
            className="opacity-90 hover:opacity-60 transition-opacity"
          >
            <Image src="/3.png" alt="Email" width={40} height={40} />
          </a>
          <a
            href="https://github.com/Bhargavi-Chaudhary-803"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="opacity-90 hover:opacity-60 transition-opacity"
          >
            <Image src="/2.png" alt="GitHub" width={40} height={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/bhargavi-chaudhary-55384936a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-90 hover:opacity-60 transition-opacity"
          >
            <Image src="/1.png" alt="LinkedIn" width={40} height={40} />
          </a>
        </div>

      </div>
    </section>
  );
}