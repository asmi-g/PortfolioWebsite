function Header() {
  return (
    <header className="border-b border-[#7e9c52] bg-[#f3cecd]/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <p className="text-sm font-semibold tracking-wide text-[#432818]">ASMI GUJRAL</p>
        <ul className="flex gap-6 text-sm text-[#685044]">
          <li>
            <a href="#projects" className="transition hover:text-[#432818]">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="transition hover:text-[#432818]">
              Experience
            </a>
          </li>
          <li>
            <a href="#about" className="transition hover:text-[#432818]">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-[#432818]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
