{/* 4. Social icons below tagline */}
<motion.div
  variants={iconContainer}
  className="flex items-center justify-center gap-8 md:gap-6 mt-8 md:mt-16"
>
  <motion.a
    variants={iconItem}
    href="https://www.linkedin.com/in/bhargavi-chaudhary-55384936a/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="opacity-90 hover:opacity-60 transition-opacity"
  >
    <Image 
      src="/1.png" 
      alt="LinkedIn" 
      width={56} 
      height={56} 
      className="w-14 h-14 md:w-10 md:h-10" 
    />
  </motion.a>
  <motion.a
    variants={iconItem}
    href="https://github.com/Bhargavi-Chaudhary-803"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="opacity-90 hover:opacity-60 transition-opacity"
  >
    <Image 
      src="/2.png" 
      alt="GitHub" 
      width={56} 
      height={56} 
      className="w-14 h-14 md:w-10 md:h-10" 
    />
  </motion.a>
  <motion.a
    variants={iconItem}
    href="mailto:bhargavichaudhary803@gmail.com"
    aria-label="Email"
    className="opacity-90 hover:opacity-60 transition-opacity"
  >
    <Image 
      src="/3.png" 
      alt="Email" 
      width={56} 
      height={56} 
      className="w-14 h-14 md:w-10 md:h-10" 
    />
  </motion.a>
</motion.div>