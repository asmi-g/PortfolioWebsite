import resume from '../assets/resume.pdf'

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'MDA Space',
    period: 'Sept. 2025 - Aug. 2026',
    summary:
      'Developed and debugged multi-fidelity robotic arm simulations on Linux clusters for dynamic analysis and 7 DoF kinematic modeling.',
  },
  {
    role: 'Embedded Systems Team Lead',
    company: 'Waterloo Space Research Team',
    period: 'Jan. 2024 - Aug. 2026',
    summary:
      'Led a team of 3 embedded software developers to interface hardware and facilitate experiment controls, for a reduced gravity experiment challenge (CANRGX9).',
  },
  {
    role: 'Embedded Software Development Intern',
    company: 'AlumaPower Corp.',
    period: 'May. 2025 - Aug. 2025',
    summary:
      'Built C and networking firmware for STM32, sensors, and distributed controllers, enabling communication and data logging; reducing errors by 55%.',
  },
  {
    role: 'Digital Systems Engineering Intern',
    company: 'Canadian Space Agency',
    period: 'Sept. 2024 - Feb. 2025',
    summary:
      'Supported architecture modeling by analyzing system requirements, enhancing digital workflows for space initiatives and missions.',
  },
  {
    role: 'Embedded Software Engineering Student',
    company: 'Cooperative & Adaptive Mechatronic Systems (CAMS) Lab - University of Waterloo',
    period: 'May. 2024 - Aug. 2024',
    summary:
      'Led the creation of a comprehensive drone system architecture, integrating hardware with ArduPilot for speed, and navigation controls.',
  },
  {
    role: 'Software Automation Intern',
    company: 'OpenText',
    period: 'Jan. 2024 - Apr. 2024',
    summary: [
      'Led end-to-end software quality assurance, including advanced troubleshooting and Python API script development for optimised system data communication.',
    ]
  },
]

function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6 rounded-2xl border border-[#7e9c52] bg-[#f3cecd] p-8 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#432818]">Experience</h2>
          <p className="mt-2 text-[#685044]">Feel free to check out my resume for more details!</p>
        </div>

        <a
          href={resume}
          download
          className="inline-flex items-center justify-center rounded-lg bg-[#432818] px-5 py-2.5 text-sm font-medium text-[#f3cecd] transition hover:bg-[#685044]"
        >
          Download Resume (PDF)
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((experience) => (
          <article key={`${experience.role}-${experience.company}`} className="rounded-xl border border-[#E9AFA3] bg-[#f3cecd] p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-[#685044]">{experience.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-[#432818]">{experience.role}</h3>
            <p className="text-sm text-[#685044]">{experience.company}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#685044]">{experience.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
