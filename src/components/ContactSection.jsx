function ContactSection() {
  return (
    <section id="contact" className="space-y-4 rounded-2xl border border-[#AEC5EB] bg-[#F9DEC9] p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#3A405A]">Contact</h2>
      <p className="text-[#685044]">
        Feel free to reachout to me via email or connect with me on LinkedIn or GitHub. I&apos;m always open to discussing new projects, collaborations, or opportunities to contribute to impactful work.
        <br></br>
        <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://www.linkedin.com/in/asmigujral/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-[#3A405A] px-5 py-2.5 text-sm font-medium text-[#F9DEC9] transition hover:bg-[#685044]"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/asmi-g"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-[#3A405A] px-5 py-2.5 text-sm font-medium text-[#F9DEC9] transition hover:bg-[#685044]"
        >
          GitHub
        </a>
        <a
          href="mailto:akgujral@uwaterloo.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-[#3A405A] px-5 py-2.5 text-sm font-medium text-[#F9DEC9] transition hover:bg-[#685044]"
        >
          Email
        </a>
        </div>
      </p>
    </section>
  )
}

export default ContactSection
