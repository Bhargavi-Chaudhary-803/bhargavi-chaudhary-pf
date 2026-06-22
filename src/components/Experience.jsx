import Image from "next/image";

export default function Experience() {
  return (
    <section className="min-h-screen px-6 pt-16 bg-transparent">
      <div className="max-w-7xl mx-auto mt-[50px]">

        {/* 1. Left aligned: "Hi! I am" */}
        <div className="flex justify-center items-baseline gap-5 mt-8">
          <span className="font-inter text-[115px] font-semibold tracking-[-2px]">
            Where I’ve
          </span>
          <span className="font-noto text-[100px] font-light leading-none italic tracking-[-4px] scale-y-[1.2] origin-bottom inline-block">
            worked
          </span>
        </div>

        <div className="flex justify-center items-baseline gap-5 mt-[-20px]">
          <span className="font-inter text-[24px] font-semibold tracking-[-1px]">
            A timeline of the teams, projects, and communities I've worked with.
          </span>
        </div>

        <div className="max-w-5xl mx-auto space-y-[16px] p-19 font-inter text-black text-[25px] leading-snug tracking-[-1px] mt-[-35px]">
  {/* Item 1 */}
  <div className="flex justify-between items-start">
    <div>
      <h3 className="font-bold tracking-tight">Open Source Contributor</h3>
      <p className="font-normal text-black/80">GirlScript Summer of Code (GSSoC)</p>
    </div>
    <span className="font-normal text-right whitespace-nowrap ml-8">Mar 2026 — Present</span>
  </div>

  {/* Item 2 */}
  <div className="flex justify-between items-start">
    <div>
      <h3 className="font-bold tracking-tight">Junior Tech Working Team</h3>
      <p className="font-normal text-black/80">Google Developer Group (GDG) MUJ</p>
    </div>
    <span className="font-normal text-right whitespace-nowrap ml-8">Oct 2025 — Present</span>
  </div>

  {/* Item 3 */}
  <div className="flex justify-between items-start">
    <div>
      <h3 className="font-bold tracking-tight">UI/UX & Frontend Development Intern</h3>
      <p className="font-normal text-black/80">Zèle Labs</p>
    </div>
    <span className="font-normal text-right whitespace-nowrap ml-8">Feb 2026 — Present</span>
  </div>

  {/* Item 4 */}
  <div className="flex justify-between items-start">
    <div>
      <h3 className="font-bold tracking-tight">Graphic Designer & Social Media Intern</h3>
      <p className="font-normal text-black/80">Zèle Labs</p>
    </div>
    <span className="font-normal text-right whitespace-nowrap ml-8">Jan 2024 — Apr 2024</span>
  </div>
</div>

        <div className="flex justify-end items-center space-x-[15px] mt-[-130px]">
          <Image
            src="/g4.png"
            alt=""
            width={240}
            height={240}
            className="object-contain"
          />
        </div>
      </div>
    </section >
  );
}