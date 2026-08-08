const awards = [
  {
    name: 'ISEB Student Grant Program',
    awardingBody: 'Canadian Space Agency',
    period: '2026',
    summary:
      'Selected as one of 10 Canadian students to participate in the International Space Education Board (ISEB) Student Grant Program, in recognition of outstanding academic performance, leadership & technical skills.',
  },
  {
    name: 'Pulsar Career LaunchPad Fellow',
    awardingBody: 'Pulsar Institute',
    period: '2026',
    summary:
      'Selected in recognition of early-career achievements, outstanding technical skills, and contributions to the Canadian space community.',
  },
  {
    name: 'Zenith Pathways Foundation Fellow 2025',
    awardingBody: 'Zenith Canada Pathways Foundation',
    period: '2025',
    summary:
      'Selected as one of 24 Canadian students and recent graduates, in recognition of outstanding community involvement, and passion for the Canadian space sector.',
  },
  {
    name: 'Basic Amateur Radio Operator Certificate',
    awardingBody: 'Innovation, Science and Economic Development Canada',
    period: '2025',
    summary:
      'Earned the Amateur Radio Operator Certificate, Basic with Honours, demonstrating proficiency in radio communication and technical knowledge in the field of amateur radio.',
  },
  {
    name: '1st Place - Best Poster & Presentation, Intern Poster Contest',
    awardingBody: 'Canadian Space Agency',
    period: '2024',
    summary:
      'Won first overall as an intern on the system architecture team, in the Fall 2024 Intern Poster Competition, out of 9 intern presentations across the Canadian Space Agency.',
  },
  {
    name: '1st Place - Canadian Reduced Gravity Experiment (CANRGX7) Competition',
    awardingBody: 'National Research Council, Canadian Space Agency',
    period: '2024',
    summary: [
      'Won first overall as part of the Waterloo Space Soldering Team, in the CANRGX7 Microgravity Research Competition, out of 4 selected teams across Canada.',
    ]
  },
]

function AwardsSection() {
  return (
    <section id="awards" className="space-y-6 rounded-2xl border border-[#7e9c52] bg-[#f3cecd] p-8 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#432818]">Awards & Certifications</h2>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {awards.map((award) => (
            <article
            key={`${award.name}-${award.awardingBody}`}
            className="group rounded-xl border border-[#7e9c52] border-l-4 border-l-[#7e9c52] bg-[#FAF3F0] p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
            <div className="flex items-center justify-between gap-3">
                <p className="inline-flex rounded-full bg-[#F3CECD] px-2.5 py-1 text-xs font-semibold tracking-wide text-[#685044]">
                {award.period}
                </p>
            </div>

            <h3 className="mt-3 text-lg font-semibold text-[#432818]">
                {award.name}
            </h3>

            <p className="mt-1 text-sm font-medium text-[#8A665A]">
                {award.awardingBody}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[#685044]">
                {award.summary}
            </p>
            </article>
        ))}
        </div>
    </section>
  )
}

export default AwardsSection
