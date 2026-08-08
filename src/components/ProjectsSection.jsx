import { useState } from 'react'

function ProjectsSection({ projects }) {
  const [openProject, setOpenProject] = useState(null)

  const toggleProject = (title) => {
    setOpenProject((current) => (current === title ? null : title))
  }

  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#3A405A]">Projects</h2>
      <div className="flex w-full flex-col gap-5">
        {projects.map((project) => (
          <button
            key={project.title}
            type="button"
            onClick={() => toggleProject(project.title)}
            className="w-full rounded-xl border border-[#AEC5EB] bg-[#F9DEC9] p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:bg-[#E9AFA3] hover:shadow-md"
          >

            <div className="flex items-center justify-between">
              <span><h3 className="text-lg font-semibold text-[#3A405A]">{project.title}</h3></span>
              <span>{openProject === project.title ? 'Hide' : 'Click to Expand'}</span>
            </div>

            <div>{project.tech}</div>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-md bg-[#AEC5EB] px-3 py-1 font-semibold text-[#3A405A] hover:bg-[#E9AFA3]"
            >
              View Repository
            </a>

            {openProject === project.title && (
              <div className="mt-4 flex gap-5 border-t border-[#E9AFA3] pt-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-1/2 rounded-lg object-contain"
                />

                <div className="w-1/2 text-sm text-[#685044]">
                  {project.description.map((paragraph, index) => (
                    <p key={index} className="mb-3">
                      {paragraph}
                    </p>
                  ))}
                </div>

              </div>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection