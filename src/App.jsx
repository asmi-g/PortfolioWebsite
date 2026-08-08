import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import { projects } from './data/projects'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#3A405A]">
      <Header />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 py-14">
        <HeroSection />
        <ProjectsSection projects={projects} />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
