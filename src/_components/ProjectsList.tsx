import { IMAGE_URLS } from "~/constants"
import { Projects } from "~/types/i18n"
import ProjectCard from "./ProjectCard"

interface ProjectsListProps {
  tranlations: Projects
}

const ProjectsList = ({ tranlations }: ProjectsListProps) => {
  const projectsList = tranlations.projectsList

  return (
    <section className="max-w-[1100px] py-16 px-auto bg-backgroundSecondary mx-auto md:py-20 md:px-16">
      <h2 className="text-4xl mb-6 text-white font-bold md:text-5xl">
        {tranlations.title}
      </h2>
      <div className="flex flex-col justify-between gap-12 md:gap-20">
        {projectsList.map((project, index) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              imageUrl={IMAGE_URLS[index]}
              techs={project.techs}
              description={project.description}
              inverted={index % 2 !== 0}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsList
