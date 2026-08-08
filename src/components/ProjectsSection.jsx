import { useState } from 'react'

function ProjectsSection({ projects }) {
  const [openProject, setOpenProject] = useState(null)

  const toggleProject = (title) => {
    setOpenProject((current) => (current === title ? null : title))
  }

  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#432818]">Projects</h2>
      <div className="flex w-full flex-col gap-5">

<div className="grid gap-4">
  {projects.map((project) => (
    <button
      key={project.title}
      type="button"
      onClick={() => toggleProject(project.title)}
      className="group w-full rounded-xl border border-[#E9AFA3] border-l-4 border-l-[#7E9C52] bg-[#F3CECD] p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-[#432818]">
          {project.title}
        </h3>

        <span className="shrink-0 rounded-full bg-[#FAF3F0] px-3 py-1 text-xs font-semibold text-[#685044]">
          {openProject === project.title ? 'Click to Hide' : 'Click to Expand'}
        </span>
      </div>

      <div className="mt-2 text-sm font-medium text-[#8A665A]">
        {project.tech}
      </div>

      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="mt-4 inline-block rounded-md bg-[#7E9C52] px-3 py-1.5 text-sm font-semibold text-[#432818] transition hover:bg-[#6E8C45]"
      >
        View GitHub Repository
      </a>

      {openProject === project.title && (
        <div className="mt-5 flex gap-5 rounded-lg border border-[#E9AFA3] bg-[#FAF3F0] p-4 shadow-sm">
          <div className="w-1/2">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg border border-[#E9AFA3] object-contain"
            />
          </div>

          <div className="w-1/2 text-sm leading-relaxed text-[#685044]">
            {project.description.map((paragraph, index) => (
              <p key={index} className="mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}

    </button>
  ))}
</div>


      </div>
    </section>
  )
}

export default ProjectsSection