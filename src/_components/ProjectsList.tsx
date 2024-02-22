import { projects } from "../constants"
import ProjectCard from "./ProjectCard"

const ProjectsList = () => {
  return (
    <section className="max-w-[1100px] py-16 px-auto bg-backgroundSecondary mx-auto md:py-20 md:px-16">
      <h2 className="text-4xl mb-6 text-lightGray md:text-5xl">Projects</h2>
      <div className="flex flex-col justify-between gap-12 md:gap-20">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              imageUrl={project.imgURL}
              pageUrl={project.pageUrl}
              repoUrl={project.repoUrl}
              techs={project.techs}
              description={project.description}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsList
