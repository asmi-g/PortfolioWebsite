function ContactSection() {
  return (
    <section id="contact" className="space-y-4 rounded-2xl border border-[#7e9c52] bg-[#f3cecd] p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#432818]">Contact</h2>
      <p className="text-[#685044]">
        Feel free to reachout! I&apos;m always open to discussing new projects, or opportunities to contribute to impactful work.
        <br></br>
        <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://www.linkedin.com/in/asmigujral/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-[#432818] px-5 py-2.5 text-sm font-medium text-[#f3cecd] transition hover:bg-[#685044]"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/asmi-g"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-[#432818] px-5 py-2.5 text-sm font-medium text-[#f3cecd] transition hover:bg-[#685044]"
        >
          GitHub
        </a>
        <a
          href="mailto:akgujral@uwaterloo.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-[#432818] px-5 py-2.5 text-sm font-medium text-[#f3cecd] transition hover:bg-[#685044]"
        >
          Email
        </a>
        </div>
      </p>
    </section>
  )
}

export default ContactSection
