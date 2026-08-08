function Header() {
  return (
    <header className="border-b border-[#AEC5EB] bg-[#F9DEC9]/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <p className="text-sm font-semibold tracking-wide text-[#3A405A]">ASMI GUJRAL</p>
        <ul className="flex gap-6 text-sm text-[#685044]">
          <li>
            <a href="#projects" className="transition hover:text-[#3A405A]">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="transition hover:text-[#3A405A]">
              Experience
            </a>
          </li>
          <li>
            <a href="#about" className="transition hover:text-[#3A405A]">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-[#3A405A]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
