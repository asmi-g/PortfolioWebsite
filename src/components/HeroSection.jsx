import profilePic from '../assets/profile-pic.jpg'

function HeroSection() {
  return (
    <section className="hero-grid relative overflow-hidden rounded-3xl border border-[#AEC5EB] bg-[#F9DEC9] p-8 shadow-sm md:grid md:grid-cols-[1fr_280px] md:gap-10 md:p-12">
      <div className="relative z-10">
         
        <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-[#3A405A] md:text-6xl">
          Hi, I&apos;m Asmi Gujral.
          {/*<span className="hero-accent-text"> I&apos;m a [Your Role].</span>*/}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#685044] md:text-lg">
          I'm an undergraduate mechatronics engineering student skilled in embedded systems and software development. 
          <br></br>
          <br></br>
          I'm passionate about working on impactful projects, and problem solving through programming!
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-lg bg-[#3A405A] px-5 py-2.5 text-sm font-semibold text-[#F9DEC9] transition hover:-translate-y-0.5 hover:bg-[#685044]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border border-[#AEC5EB] bg-[#AEC5EB] px-5 py-2.5 text-sm font-semibold text-[#3A405A] transition hover:-translate-y-0.5 hover:border-[#E9AFA3] hover:bg-[#E9AFA3]"
          >
            Contact Me
          </a>
        </div>

      </div>

      <div className="relative z-10 mt-8 grid place-items-center md:mt-0">
        <div className="hero-float rounded-[2rem] border border-[#AEC5EB] bg-[#F9DEC9] p-4 shadow-lg">
          <img
            src={profilePic}
            alt="Profile"
            className="h-56 w-56 rounded-[1.5rem] border border-[#E9AFA3] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
